import React from 'react';
import PropTypes from 'prop-types';

// file item
// class component
export class ListItem extends React.Component {
    render() {
        const {file} = this.props;

        return (
            <div>
                <li>{file}</li>
            </div>
        );
    }
}

// parameter type declaration
ListItem.propTypes = {
    file: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};
