import React, { ChangeEventHandler } from 'react';
import { IssueState } from '../../generated/graphql';
import logo from '../../logo.svg';

interface Props {
  filterValue: IssueState;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Header: React.FC<Props> = (props) => {
  const { onChange } = props;

  return (
    <header className="header">
      <div className="header-items">
        <div className="header-items__headline">
          <img alt="React Logo" src={logo} />
          <h1>React.js Issues</h1>
        </div>
      </div>
      <div className="header-items__filter">
        <select onChange={onChange}>
          <option value={-1}>ALL</option>
          <option value="OPEN"> OPEN </option>
          <option value="CLOSED"> CLOSED </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
