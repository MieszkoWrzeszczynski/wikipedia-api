import PropTypes from 'prop-types';
import React from 'react';
import ListItem from './ListItem';

const List = ({
  data = []
}) => {
  return (
    <div className="list__container">
      {data.map(item => (
        <ListItem
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array
};

export default List;
