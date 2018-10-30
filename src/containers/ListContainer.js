'use strict';

import React, {Component} from 'react';
import {List} from '../components/List'

// filer container
// class component
export class ListContainer extends Component {
    render() {
        const {files} = this.props;

        return (
            <div>
                <List files={files}/>
            </div>
        );
    }
}
