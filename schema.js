export const typeDefs = `#graphql
    type Comic {
        id: ID!
        title: String!
        publisher: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        artist_id: ID!
        comic_id: ID!
    }
    type Artist {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        comics: [Comic]
        artists: [Artist]
    }

    type Mutation {
        addComic(title: String!, publishers: [String!]!): Comic
        updateComic(id: ID!, title: String, publishers: [String!]): Comic
        deleteComic(id: ID!): ID

        addReview(rating: Int!, content: String!, artist_id: ID!, comic_id: ID!): Review
        updateReview(id: ID!, rating: Int, content: String): Review
        deleteReview(id: ID!): ID

        addArtist(name: String!, verified: Boolean!): Artist
        updateArtist(id: ID!, name: String, verified: Boolean): Artist
        deleteArtist(id: ID!): ID
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