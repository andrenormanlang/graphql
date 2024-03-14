import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

// db
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        comics() {
            return db.comics 
        },
        comic(_, args) {
            return db.comics.find((comic) => comic.id === args.id);
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id);
        },
        artists() {
            return db.artists
        },
        artist(_, args) {
            return db.artists.find((artist) => artist.id === args.id);
        },
        comicReviews(_, { comic_id }) {
            return db.reviews.filter(review => review.comic_id === comic_id);
        },
        artistReviews(_, { artist_id }) {
            return db.reviews.filter(review => review.artist_id === artist_id);
        },
    },
    Comic: {
        reviews(parent) {
            return db.reviews.filter((r) => r.comic_id === parent.id);
        }
    },
    Review: {
        artist(parent) {
            return db.artists.find((a) => a.id === parent.artist_id);
        },
        comic(parent) {
            return db.comics.find((c) => c.id === parent.comic_id);
        }
    },
    Artist: {
        reviews(parent) {
            return db.reviews.filter((r) => r.artist_id === parent.id);
        }
    },
    Mutation: {
        // addComic(_, { title, publishers }) {
        //     // Implementation to add a comic to db.comics
        // },
        addComic(_, args){
            let comic = {
                ...args.comic,
                // id: Math.floor(Math.random() * 1000).toString()
                id: (db.comics.length + 1).toString()
            }
            db.comics.push(comic);

            return comic;
        },
        // updateComic(_, { id, title, publishers }) {
        //     // Implementation to update a comic in db.comics
        // },
        updateComic(_, args) {
            db.comics = db.comics.map((c) => {
                if (c.id === args.id) {
                    return {...c,...args.edits}
                }
                    return c;
            })
            return db.comics.find((c) => c.id === args.id);
        },
        deleteComic(_, args) {
           db.comics = db.comics.filter((c) => c.id !== args.id);

           return db.comics;
        },
        // addReview(_, { rating, content, artist_id, comic_id }) {
        //     // Implementation to add a review to db.reviews
        // },
        addReview(_, args) {
            let review = {
                ...args.review,
                // id: Math.floor(Math.random() * 1000).toString()
                id: (db.reviews.length + 1).toString()
            }
            db.reviews.push(review);
            return review;
        },
        // updateReview(_, { id, rating, content }) {
        //     // Implementation to update a review in db.reviews
        // },
        updateReview(_, args) {
            db.reviews = db.reviews.map((r) => {
                if (r.id === args.id) {
                    return {...r,...args.edits}
                }
                    return r;
            })
            return db.reviews.find((r) => r.id === args.id);
        },
        deleteReview(_, { id }) {
            // Implementation to delete a review from db.reviews
            return id; // Return the id of the deleted review
        },
        deleteReview(_, args) {
            db.reviews = db.reviews.filter((r) => r.id !== args.id);
 
            return db.reviews;
         },
        // addArtist(_, { name, verified }) {
        //     // Implementation to add an artist to db.artists
        // },
        addArtist(_, args) {
            let artist = {
                ...args.artist,
                // id: Math.floor(Math.random() * 1000).toString()
                id: (db.artists.length + 1).toString()
            }
            db.artists.push(artist);
            return artist;
        },
        // updateArtist(_, { id, name, verified }) {
        //     // Implementation to update an artist in db.artists
        // },
        updateArtist(_, args) {
            db.artists = db.artists.map((a) => {
                if (a.id === args.id) {
                    return {...a,...args.edits}
                }
                    return a;
            })
            return db.artists.find((a) => a.id === args.id);
        },
        // deleteArtist(_, { id }) {
        //     return id; 
        // },
        deleteArtist(_, args) {
            db.artists = db.artists.filter((a) => a.id !== args.id);
 
            return db.artists;
         },
    },
}

// RUN SERVER with nodemon index.js
// server setup
const server = new ApolloServer({
    // typeDefs --- definitions of types of data author, data game, etc
    typeDefs,
    // resolvers --- functions that return data for each type
    resolvers
});

const {url} = await startStandaloneServer(server, {
    list: {port: 4000}
});

console.log(`Server ready at port`, 4000);