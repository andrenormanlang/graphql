export const typeDefs = `#graphql
    type Comic {
        id: ID!
        title: String!
        publishers: [String!]! 
        reviews: [Review!] 
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        # artist_id: ID!
        # comic_id: ID!
        artist: Artist!
        comic: Comic!
    }
    type Artist {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        comics: [Comic]
        artists: [Artist]
        review(id: ID!): Review
        comic(id: ID!): Comic
        artist(id: ID!): Artist
    }

    type Mutation {
        # addComic(title: String!, publishers: [String!]!): Comic
        addComic(comic: AddComicInput!): Comic
        # updateComic(id: ID!, title: String, publishers: [String!]): Comic
        updateComic(id: ID!, edits: EditComicInput): Comic
        # deleteComic(id: ID!): ID
        deleteComic(id: ID!): [Comic]

        # addReview(rating: Int!, content: String!, artist_id: ID!, comic_id: ID!): Review
        addReview(review: AddReviewInput!): Review
        # updateReview(id: ID!, rating: Int, content: String): Review
        updateReview(id: ID!, edits: EditReviewInput): Review
        # deleteReview(id: ID!): ID
        deleteReview(id: ID!): [Review]

        # addArtist(name: String!, verified: Boolean!): Artist
        addArtist(artist: AddArtistInput!): Artist
        # updateArtist(id: ID!, name: String, verified: Boolean): Artist
        updateArtist(id: ID!, edits: EditArtistInput): Artist
        # deleteArtist(id: ID!): ID
        deleteArtist(id: ID!): [Artist]
    }
    input AddComicInput {
        title: String!
        publishers: [String!]!
    }
    input AddReviewInput {
        rating: Int!
        content: String!
        artist_id: ID!
        comic_id: ID!
    }
    input AddArtistInput {
        name: String!
        verified: Boolean!
    }
    input EditComicInput{
        title: String,
        publishers: [String!]
    }
    input EditReviewInput{
        rating: Int,
        content: String
    }
    input EditArtistInput{
        name: String,
        verified: Boolean
    }
    type Query {
        comicReviews(comic_id: ID!): [Review]
        artistReviews(artist_id: ID!): [Review]
        reviews: [Review]
        review(id: ID!): Review
        comics: [Comic]
        comic(id: ID!): Comic
        artists: [Artist]
        artist(id: ID!): Artist
    }

`;

// int, float, string, boolean, id