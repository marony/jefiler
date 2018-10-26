import React from 'react';
import PropTypes from 'prop-types';

// file list
// class component
class List extends React.Component {
    render() {
        const {files, onClick} = this.props;
        return (
            <button onClick={onClick}>{1}</button>
        );
    }
}

// parameter type declations
List.propTypes = {
    files: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default List;
