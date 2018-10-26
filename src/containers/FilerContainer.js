import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions';
import Tree from '../components/Tree';
import List from '../components/List';

// calculator container
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
        const {calculator, actions} = this.props;
        return (
            <div>
                <button onClick={() => actions.onTest()}>TEST</button>
                <div>
                    {/* ツリーの状態によって開閉のアクションを切り替える？？？(TreeではなくTreeItemに設定するのでは？) */}
                    <Tree n={1} onClick={() => actions.onNumClick(1)}/>
                </div>
                <div>
                    {/* ファイルをクリックしたアクション(ListではなくListItemに設定するのでは？) */}
                    <List n={2} onClick={() => actions.onNumClick(2)}/>
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
