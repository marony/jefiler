import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions';
import {TreeContainer} from './TreeContainer'
import {ListContainer} from './ListContainer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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
            <MuiThemeProvider>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            jefiler
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container>
                    <Grid item xs={4}>
                        <TreeContainer/>
                    </Grid>
                    <Grid item xs={8}>
                        <ListContainer files={files}/>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
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
