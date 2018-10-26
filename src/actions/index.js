import * as actionTypes from './action-types';

// action creators

// application initialize request
export const initialize = () => {
    console.log(`initialize: ${this}`);
    return ({
        type: actionTypes.INITIALIZE,
    })
};

// application initialize completed
export const initialized = (files) => {
    console.log(`initialized: ${this}`);
    return ({
        type: actionTypes.INITIALIZED,
        files: files,
    })
};

// show directory tree
export const showTree = (tree) => {
    console.log(`showTree: ${this}, tree = ${JSON.stringify(tree)}`);
    return ({
        type: actionTypes.SHOW_TREE,
        tree: tree
    });
}

// open directory tree
export const openTree = (treeItem) => {
    console.log(`openTree: ${this}, treeItem = ${JSON.stringify(treeItem)}`);
    return ({
        type: actionTypes.OPEN_TREE,
        treeItem: treeItem,
    })
}

// open directory tree
export const closeTree = (treeItem) => {
    console.log(`closeTree: ${this}, treeItem = ${JSON.stringify(treeItem)}`);
    return ({
        type: actionTypes.CLOSE_TREE,
        treeItem: treeItem,
    })
}

// show file list
export const showList = (files) => {
    console.log(`showList: ${this}, files = ${JSON.stringify(files)}`);
    return ({
        type: actionTypes.SHOW_LIST,
        files: files,
    });
}

// onClick file in list
export const onClickFile = (file) => {
    console.log(`onClickFile: ${this}, file = ${JSON.stringify(file)}`);
    return ({
        type: actionTypes.CLICK_LIST_FILE,
        file: file,
    });
}
