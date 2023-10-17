export const listBookingsID = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        agencyID
        officeID
        transport
      }
      nextToken
    }
  }
`;

export const getAgencyEmployees = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      name
      rif
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          officeID
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const listBookingsAvailable = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        code
        agencyID
        officeID
        customers {
          nextToken
          __typename
        }
        tickets {
          nextToken
          __typename
        }
        stops {
          nextToken
          __typename
        }
        departureCity
        arrivalCity
        departure {
          time
          date
          city
          state
          address
          __typename
        }
        arrival {
          time
          date
          city
          state
          address
          __typename
        }
        stock
        price
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      code
      agencyID
      officeID
      customers {
        items {
          id
          name
          lastName
          ci
          email
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          customer {
            id
            name
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          __typename
        }
        nextToken
        __typename
      }
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      departureCity
      arrivalCity
      departure {
        time
        date
        city
        state
        address
        __typename
      }
      arrival {
        time
        date
        city
        state
        address
        __typename
      }
      stock
      price
      createdBy
      driver
      transport
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
