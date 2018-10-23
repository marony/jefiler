import React from 'react';
import PropTypes from 'prop-types';

// number button component
// function component
// const NumBtn = ({ n, onClick }) => (
//   <button onClick={onClick}>{n}</button>
// );

// class component
class NumBtn extends React.Component {
  render() {
    const { n, onClick } = this.props;
    return (
      <button onClick={onClick}>{n}</button>
    );
  }
}

// parameter type declations
NumBtn.propTypes = {
  n: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumBtn;
