'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './ListItem';

// file list
// class component
export class List extends React.Component {
    render() {
        const {files} = this.props;
        return (
            <div>
                {files.map((file) => {
                    return <ListItem file={file}/>
                })}
            </div>
        );
    }
}

// parameter file list declaration
List.propTypes = {
    files: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};
