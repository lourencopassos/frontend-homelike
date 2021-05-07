import React from 'react';
import { User } from '../../generated/graphql';

interface Props {
  participant: Partial<User>;
}

const IssueParticipant: React.FC<Props> = ({ participant }) => {

  const { avatarUrl, login } = participant;
  return (
    <div className="issue-participant ">
      <img alt={login as string} src={avatarUrl} />
      <p>{login}</p>
    </div>
  );
};

export default IssueParticipant;
