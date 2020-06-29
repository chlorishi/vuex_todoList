export default {
    unDoneLength(state) {
        return state.list.filter(item => !item.done).length
    },
    viewList(state) {
        if (state.viewKey === 'all') {
            return state.list
        } else if (state.viewKey === 'undone') {
            return state.list.filter(item => !item.done)
        } else {
            return state.list.filter(item => item.done)
        }
    }
    // eslint-disable-next-line eol-last
}