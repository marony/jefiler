import React from 'react';
import PropTypes from 'prop-types';

// plus botton component
// function component
// const PlusBtn = ({ onClick }) => (
//   <button onClick={onClick}>+</button>
// );

// class component
class PlusBtn extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick}>+</button>
    );
  }
}

// parameter type declations
PlusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlusBtn;
