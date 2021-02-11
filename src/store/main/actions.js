import * as types from "./mutation-types";

/**
 * Selects project and saves in working context
 * @param  {Object} context  Menu store context
 * @param  {Object} payload  Visiable Description
 */

function setInfo({ commit }, payload) {
    commit(types.GET_INFO, payload);
}

/**
 * Selects project and saves in working context
 * @param  {Array} context  Menu store context
 * @param  {Array} payload  Visiable Description
 */

function setResults({ commit, state }, payload) {
    const res = [
        ...state.results,
        ...payload,
    ];
    commit(types.GET_RESULTS, res);
}

export default {
    setInfo,
    setResults,
};

