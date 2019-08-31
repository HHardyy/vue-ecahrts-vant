const state = {
    showPic: false,
    chooseVal: '请选择区域'
}

const mutations = {
    fadein(state, bool) {
        state.showPic = bool
    },
    fadeout(state, bool) {
        state.showPic = bool
    },
    choose(state, val) {
        state.chooseVal = val
    }
}

const actions = {
    fadeIntogo({ commit }, bool) {
        commit('fadein', bool)
    },
    hideTogo({ commit }, bool) {
        commit('fadeout', bool)
    },
    chooseCity({ commit }, val) {
        commit('choose', val)
    }
}

const getters = {
    isShow() {
        return state.showPic
    },
    chooseVa() {
        return state.chooseVal
    }
}

export default { state, mutations, actions, getters }