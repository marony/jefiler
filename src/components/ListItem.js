import React from 'react';
import PropTypes from 'prop-types';

// file list item
// class component
class ListItem extends React.Component {
  render() {
    const { file, onClick } = this.props;
    return (
      <button onClick={onClick}>+</button>
    );
  }
}

// parameter type declations
ListItem.propTypes = {
  file: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
