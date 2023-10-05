import { gql } from '@apollo/client';

export const GET_ME = gql `
    {
        me {
            _id
            username
            email 
            savedBook {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
    `;