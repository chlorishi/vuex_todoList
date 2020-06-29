import axios from 'axios'

export default {
    getList({ state, commit }) {
        axios.get('/list.json').then(({ data }) => {
            commit('initlist', data)
        })
    }
    // eslint-disable-next-line eol-last
}