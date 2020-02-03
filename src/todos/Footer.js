import React from 'react';
import * as todostatus from './status';
import { CButtonGroup, CButton } from '../UI/Button/CButton';
import ListGroupItem from '../UI/List/ListItem';

const Footer = ({ todoLength, currentFilter, filterTodo }) => {
  return (
    <ListGroupItem className="todo-summary">
      <div>
        {todoLength} <i> todos </i>
      </div>
      <CButtonGroup>
        <CButton
          active={currentFilter === todostatus.ALL}
          clicked={() => filterTodo(todostatus.ALL)}
          btnType="cprimary-outline"
        >
          All
        </CButton>
        <CButton
          active={currentFilter === todostatus.ACTIVE}
          clicked={() => filterTodo(todostatus.ACTIVE)}
          btnType="cdanger-outline"
        >
          Active
        </CButton>
        <CButton
          active={currentFilter === todostatus.COMPLETED}
          clicked={() => filterTodo(todostatus.COMPLETED)}
          btnType="csuccess-outline"
        >
          Completed
        </CButton>
      </CButtonGroup>
      <div></div>
    </ListGroupItem>
  );
};

export default Footer;
