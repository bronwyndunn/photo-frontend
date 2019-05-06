import gql from 'graphql-tag';

export const GET_PHOTO_BY_ID = gql`
  query getPhotosById($ids: [ID!]!) {
    getPhotosById(ids: $ids) {
        id
        image(spec: { height: 900, width: 1200, watermark: true }) {
          url
          height
          width
        }
    }
  }
`

export const GET_PHOTOS_BY_PLAYER = gql`
  query getPhotosByPlayer($playerId: ID!) {
    getPhotosByPlayer(playerId: $playerId) {
        id
        image(spec: { height: 3000, width: 3000, watermark: true }) {
          url
          height
          width
        }
    }
  }
`
