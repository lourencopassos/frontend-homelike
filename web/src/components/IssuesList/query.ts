import gql from 'graphql-tag';

export const QUERY_ISSUES_LIST = gql` 
query IssuesList {
  repository(owner: "reactjs", name: "reactjs.org") {
    issues(orderBy: {field: CREATED_AT, direction: DESC}, first: 10) {
      edges {
        cursor
        node {
          author {
	          login
          }
          body
          closedAt
          bodyText
          state
          createdAt
          id
          title
          url
          participants (first: 50){
            totalCount
            nodes {
						login
            avatarUrl
}
}
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

export const QUERY_ISSUES_LIST_WITH_CURSOR = gql` 
query IssuesListWithCursor($cursor: String!)  {
  repository(owner: "reactjs", name: "reactjs.org") {
    issues(orderBy: {field: CREATED_AT, direction: DESC}, first: 10, after: $cursor) {
      edges {
        cursor
        node {
          author {
	          login
          }
          body
          closedAt
          bodyText
          state
          createdAt
          id
          title
          url
          participants (first: 50){
            totalCount
            nodes {
						login
            avatarUrl
}
}
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





export const QUERY_ISSUES_LIST_PAGINATED_WITH_STATE= gql` 
query IssuesListPaginatedWithState($cursor: String!, $state: [IssueState!]) {
  repository(owner: "reactjs", name: "reactjs.org") {
    issues(states:$state, orderBy: {field: CREATED_AT, direction: DESC}, first: 10, after: $cursor) {
      edges {
        cursor
        node {
          author {
	          login
          }
          body
          closedAt
          bodyText
          state
          createdAt
          id
          title
          url
          participants (first: 50){
            totalCount
            nodes {
						login
            avatarUrl
}
}
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
    issues(orderBy: {field: CREATED_AT, direction: DESC}, first: 10, after: $cursor) {
      edges {
        cursor
        node {
          author {
	          login
          }
          body
          closedAt
          bodyText
          state
          createdAt
          id
          title
          url
          participants (first: 50){
            totalCount
            nodes {
						login
            avatarUrl
}
}
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
    issues(states:$state, orderBy: {field: CREATED_AT, direction: DESC}, first: 10) {
      edges {
        cursor
        node {
          author {
	          login
          }
          body
          closedAt
          bodyText
          state
          createdAt
          id
          title
          url
          participants (first: 50){
            totalCount
            nodes {
						login
            avatarUrl
}
}
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