import gql from 'graphql-tag';

export const QUERY_ISSUES_LIST = gql` 
query IssuesList {
  repository(owner: "reactjs", name: "reactjs.org") {
    issues(orderBy: {field: CREATED_AT, direction: ASC}, last: 10) {
      edges {
        cursor
        node {
          state
          createdAt
          id
          title
          url
          labels(first: 5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

export const QUERY_ISSUES_LIST_PAGINATED = gql` 
query IssuesListPaginated($cursor: String!) {
  repository(owner: "reactjs", name: "reactjs.org") {
    issues(states: OPEN, orderBy: {field: CREATED_AT, direction: ASC}, last: 10, before: $cursor) {
      edges {
        cursor
        node {
          createdAt
          id
          title
          url
          labels(first: 5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

export const QUERY_ISSUES_FILTER_BY_STATE = gql` 
query IssuesListByState($state: [IssueState!]) {
  repository(owner: "reactjs", name: "reactjs.org") {
    issues(states: $state, orderBy: {field: CREATED_AT, direction: ASC}, last: 10) {
      edges {
        cursor
        node {
          createdAt
          id
          title
          url
          labels(first: 5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;