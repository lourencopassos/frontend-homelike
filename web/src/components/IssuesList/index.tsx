import React from 'react';
import IssueCard from '../IssueCard';

interface Props {
  issues: any;
}

const IssuesList: React.FC<Props> = ({ issues }) => {
  console.log();

  return (
    <section>
      {issues &&
        issues.map(({ node }: { node: any }) => (
          <IssueCard key={node.id} issue={node} />
        ))}
    </section>
  );
};

export default IssuesList;
