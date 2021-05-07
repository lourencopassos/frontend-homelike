import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import Header from '../../components/Header';
import IssuesList from '../../components/IssuesList';
import { IssueState, useIssuesListQuery } from '../../generated/graphql';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<IssueState | any>(undefined);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  let state;

  const issueFilter: IssueState = filterValue;

  if (filterValue !== undefined) {
    state = issueFilter;
  } else {
    state = undefined;
  }

  const { data, error, loading, fetchMore } = useIssuesListQuery({
    variables: { after: null, state },
  });

  return (
    <>
      <Header
        filterValue={filterValue}
        onChange={(event: any) => setFilterValue(event.target.value)}
      />
      {loading && (
        <div className="main-section__loader-container ">
          <Loader
            color="#00BFFF"
            height={100}
            timeout={3000}
            type="Grid"
            width={250}
          />
        </div>
      )}
      {error && <div className="main-section__loader-container ">{error}</div>}
      {loadingMore && (
        <div className="main-section__loader-container ">
          <Loader
            color="#00BFFF"
            height={100}
            timeout={3000}
            type="Grid"
            width={250}
          />
        </div>
      )}
      {!loading && !loadingMore && (
        <section className="main-section">
          <div className="issues-pagination">
            {currentPage > 0 && (
              <button
                disabled={loading}
                onClick={async () => {
                  setLoadingMore(true);
                  setCurrentPage(currentPage - 1);
                  const endCursor = data?.repository?.issues.pageInfo.endCursor;
                  await fetchMore({
                    variables: { before: endCursor },
                    updateQuery: (prevResult, { fetchMoreResult }) => {
                      const newList = fetchMoreResult as any;
                      return newList;
                    },
                  });
                  setLoadingMore(false);
                }}>
                Previous
              </button>
            )}
            <button
              disabled={loadingMore || loading}
              onClick={async () => {
                setLoadingMore(true);
                setCurrentPage(currentPage + 1);
                const endCursor = data?.repository?.issues.pageInfo.endCursor;
                await fetchMore({
                  variables: { after: endCursor },
                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    const newList = fetchMoreResult as any;
                    return newList;
                  },
                });
                setLoadingMore(false);
              }}>
              Next
            </button>
          </div>
          {!loading && <IssuesList issues={data?.repository?.issues?.edges} />}
        </section>
      )}
    </>
  );
}

export default Main;
