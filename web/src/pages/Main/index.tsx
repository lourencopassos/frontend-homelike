import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import IssuesList from '../../components/IssuesList';
import {
  IssuesListQuery,
  IssueState,
  useIssuesListByStateQuery,
  useIssuesListPaginatedQuery,
  useIssuesListQuery,
} from '../../generated/graphql';

function Main() {
  const [issuesList, setIssuesList] = useState<IssuesListQuery | [] | any>([]);
  const [filterValue, setFilterValue] = useState<IssueState | any>('-1');
  const [nextPageCursor, setNextPageCursor] = useState<string>('');
  const [previousPageCursor, setPreviouPageCursor] = useState<string | null>(
    null,
  );
  const [nextIssuesList, setNextIssuesList] = useState<
    IssuesListQuery | [] | any
  >([]);
  const [previousIssuesList, setPreviousIssuesList] = useState<
    IssuesListQuery | [] | any
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [issuesLoading, setIssuesLoading] = useState<boolean>(true);

  const { data, error, loading } = useIssuesListQuery();

  let stateFilter;

  if (filterValue === '-1') {
    stateFilter = { state: null };
  } else {
    stateFilter = { state: filterValue };
  }

  // const issuesFromPage = issuesList;

  // const lastIssueFromArray = issuesFromPage[issuesFromPage?.length - 1];
  // const lastIssueCursor = lastIssueFromArray?.cursor;

  const responseByState = useIssuesListByStateQuery({ variables: stateFilter });

  const nextPageIssues = useIssuesListPaginatedQuery({
    variables: { cursor: nextPageCursor },
  });

  useEffect(() => {
    if (currentPage === 0) {
      data && setIssuesList(data?.repository?.issues?.edges);
      // issuesList && setNextPageCursor(lastIssueCursor);
    }
  }, [loading]);

  useEffect(() => {
    if (filterValue !== '-1') {
      responseByState &&
        setIssuesList(responseByState?.data?.repository?.issues?.edges);
    }
  }, [responseByState?.loading]);

  // const onClickNextPage = () => {
  //   setIssuesList(nextPageIssues?.data?.repository?.issues?.edges);
  //   setCurrentPage(currentPage + 1);

  //   const currentIssues = issuesList;
  //   const currentIssuesFromArray = currentIssues[issuesFromPage?.length - 1];
  //   const currentIssuesLast = currentIssuesFromArray?.cursor;

  //   setNextPageCursor(currentIssuesLast);
  // };

  // console.log(nextPageCursor);

  return (
    <>
      <Header
        filterValue={filterValue}
        onChange={(event: any) => setFilterValue(event.target.value)}
      />
      <IssuesList issues={issuesList} />
      {/* <button onClick={() => onClickNextPage()}>Next</button> */}
    </>
  );
}

export default Main;
