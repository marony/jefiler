import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions';
import {TreeContainer} from './TreeContainer'
import {ListContainer} from './ListContainer'

// filer container
// class component
class FilerContainer extends Component {
    componentDidMount() {
        // {"calculator":{"inputValue":0,"resultValue":0,"showingResult":false},"actions":{}}
        console.log(`componentDidMount: ${JSON.stringify(this.props)}`);
        const {actions} = this.props;
        actions.initialize();
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount: ${JSON.stringify(this.props)}`);
    }

    render() {
        const {filer} = this.props;
        const {files, file, tree, treeItem} = filer;

        return (
            <div>
                <div>
                    <TreeContainer/>
                </div>
                <div>
                    <ListContainer files={files}/>
                </div>
            </div>
        );
    }
}

const mapState = (state, ownProps) => {
    console.log(`mapState: ${JSON.stringify(state)}`);
    return ({
        filer: state.filer,
    })
};

// function mapDispatch(dispatch) {
//   return {
//     actions: {
//       onNumClick: (number) => dispatch(actions.onNumClick(number)),
//       onPlusClick: () => dispatch(actions.onPlusClick()),
//     }
//   };
// }
const mapDispatch = dispatch => {
    return {actions: bindActionCreators(actions, dispatch),}
}

export default connect(mapState, mapDispatch)(FilerContainer);
