import React from 'react';
import PropTypes from 'prop-types';

// tree directory item
// class component
class TreeItem extends React.Component {
    render() {
        const {treeItem, onClick} = this.props;
        return (
            <button onClick={onClick}>+</button>
        );
    }
}

// parameter type declations
TreeItem.propTypes = {
    treeItem: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TreeItem;
