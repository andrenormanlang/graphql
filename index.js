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
    Mutation: {
        addComic(_, { title, publishers }) {
            // Implementation to add a comic to db.comics
        },
        updateComic(_, { id, title, publishers }) {
            // Implementation to update a comic in db.comics
        },
        deleteComic(_, { id }) {
            // Implementation to delete a comic from db.comics
            return id; // Return the id of the deleted comic
        },
        addReview(_, { rating, content, artist_id, comic_id }) {
            // Implementation to add a review to db.reviews
        },
        updateReview(_, { id, rating, content }) {
            // Implementation to update a review in db.reviews
        },
        deleteReview(_, { id }) {
            // Implementation to delete a review from db.reviews
            return id; // Return the id of the deleted review
        },
        addArtist(_, { name, verified }) {
            // Implementation to add an artist to db.artists
        },
        updateArtist(_, { id, name, verified }) {
            // Implementation to update an artist in db.artists
        },
        deleteArtist(_, { id }) {
            return id; 
        },
    },
}

// RUN SERVER wit nodemon index.js!
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