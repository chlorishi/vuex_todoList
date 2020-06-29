export default {
    //初始化数据列表
    initlist(state, data) {
        state.list = data
    },
    //把输入值保存到state中
    setInputValue(state, inpVal) {
        state.inputValue = inpVal
    },
    //新增数据到列表
    addItem(state) {
        const obj = {
            id: '',
            info: state.inputValue,
            done: false
        }
        obj.id = state.list.length == 0 ? 0 : state.list[state.list.length - 1].id + 1
        state.list.push(obj)
        state.inputValue = ''
    },
    //删除列表数据
    removeItem(state, id) {
        state.list = state.list.filter(item => {
            return item.id !== id
        })
    },
    //改变时间完成状态
    changeStatus(state, params) {
        const i = state.list.findIndex(item => item.id === params.id)
        if (i !== -1) {
            state.list[i].done = params.status
        }
    },
    //清楚已完成任务
    clearDone(state) {
        state.list = state.list.filter(item => !item.done)
    },
    //修改视图的关键字
    changeViewKey(state, key) {
        state.viewKey = key
    }
    // eslint-disable-next-line eol-last
}