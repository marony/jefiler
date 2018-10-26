import React from 'react';
import PropTypes from 'prop-types';

// directory tree
// class component
class Tree extends React.Component {
    render() {
        const {tree, onClick} = this.props;
        return (
            <button onClick={onClick}>{1}</button>
        );
    }
}

// parameter type declations
Tree.propTypes = {
    tree: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Tree;
