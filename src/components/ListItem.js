import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// file item
// class component
export class ListItem extends React.Component {
    render() {
        const path = window.require('path');

        const {file} = this.props;
        const fileName = path.basename(file);
        return (
            <div>
                <Button>{fileName}</Button>
            </div>
        );
    }
}

// parameter type declaration
ListItem.propTypes = {
    file: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};
