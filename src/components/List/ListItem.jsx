import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({
  title = '',
  content = ''
}) => {
  return (
    <div className="list__item">
      <div className="list__item-title">
        {title}
      </div>
      <div className="list__item-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ListItem;
