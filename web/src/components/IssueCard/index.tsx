import React from 'react';
import { Issue, User } from '../../generated/graphql';
import IssueParticipant from '../IssueParticipant';

interface IssueProps {
  issue: Partial<Issue>;
}

const stateTagColor = (state: string) => {
  switch (state) {
    case (state = 'CLOSED'): // eslint-disable-line no-param-reassign
      return '#00b563';
    case (state = 'OPEN'): // eslint-disable-line no-param-reassign
      return '#b50052';
    default:
      return 'black';
  }
};

const IssueCard: React.FC<IssueProps> = ({ issue }) => {
  const { title, state, bodyText, participants, createdAt, author } = issue;

  const date = new Date(createdAt).toLocaleDateString('de-DE');

  return (
    <div className="issue-card">
      <section className="issue-card__header">
        <div>
          <p>{date}</p>
        </div>
        <h3>{title}</h3>
        <div
          className="issue-card__state-tag"
          style={{ backgroundColor: stateTagColor(state as string) }}>
          <span>{state}</span>
        </div>
      </section>
      <section className="issue-card__body">
        <div>
          <p>
            Author: <span>{author?.login}</span>
          </p>
        </div>
        <p> {bodyText} </p>
      </section>
      {participants?.totalCount && (
        <section className="issue-card__footer">
          {participants?.nodes?.map((participant) => (
            <IssueParticipant
              key={participant?.id}
              participant={participant as User}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default IssueCard;
