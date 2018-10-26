import * as actionTypes from '../actions/action-types';

// initial state
const initialAppState = {
    tree: [],
    treeItem: null,
    files: [],
    file: null,
};

// filer reducer
const filer = (state = initialAppState, action) => {
    // action type to action creators mapping
    const actionCreators = {
        [actionTypes.SHOW_TREE]: showTree,
        [actionTypes.OPEN_TREE]: openTree,
        [actionTypes.CLOSE_TREE]: closeTree,
        [actionTypes.SHOW_LIST]: showList,
        [actionTypes.CLICK_LIST_FILE]: clickFile,
    };

    if (action.type in actionCreators)
        return actionCreators[action.type](state, action);
    return state;
};

// TODO: INITIALIZED implements

// show tree
const showTree = (state, action) => {
    return {
        ...state,
        tree: action.tree,
    };
}

// open tree
const openTree = (state, action) => {
    return {
        ...state,
        treeItem: action.treeItem,
    };
}

// close tree
const closeTree = (state, action) => {
    return {
        ...state,
        treeItem: action.treeItem,
    };
}

// show files list
const showList = (state, action) => {
    return {
        ...state,
        files: action.files,
    };
}

// click file
const clickFile = (state, action) => {
    return {
        ...state,
        file: action.file,
    };
}

export default filer;
