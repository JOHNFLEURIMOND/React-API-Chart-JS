import { gql } from '@apollo/client';

export const GET_DUTCHIE_PRODUCT = gql`
  query Backend($id: ID!) {
    Backend(id: $id) {
      message
      statusLink
      severity
      timestamp
    }
  }
`;
