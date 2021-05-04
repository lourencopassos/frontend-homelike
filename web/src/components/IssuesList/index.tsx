import React, { useState, useEffect } from 'react';
import { IssuesListQuery, useIssuesListQuery } from '../../generated/graphql';

const IssuesList: React.FC = () => {
  const [issues, setIssues] = useState<IssuesListQuery | [] | undefined>([]);

  const { data, error, loading } = useIssuesListQuery();

  useEffect(() => setIssues(data), [issues]);

  console.log(issues);
  console.log(loading);

  return (
    <div>
      <p>Teste</p>
    </div>
  );
};

export default IssuesList;
