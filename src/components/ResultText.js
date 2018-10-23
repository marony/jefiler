import React from 'react';
import PropTypes from 'prop-types';

// result text component
// function component
// const ResultText = ({ result }) => (
//   <div>
//     Result: <span>{result}</span>
//   </div>
// );

// class component
class ResultText extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div>
        Result: <span>{result}</span>
      </div>
    );
  }
}

// parameter type declations
ResultText.propTypes = {
  result: PropTypes.number.isRequired
}

export default ResultText;
