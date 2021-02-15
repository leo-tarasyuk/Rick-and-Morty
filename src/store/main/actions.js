import * as types from "./mutation-types";

function setResults({ commit }, payload) {
    commit(types.SET_RESULTS, payload);
}

async function getData({ commit, state }, payload) {
    const responce = await fetch(payload);
    const { info, results } = await responce.json();
    const res = !results.length
        ? [...results]
        : [
            ...state.results,
            ...results,
        ]

    commit(types.GET_DATA, { info, results: res })
}

export default {
    setResults,
    getData
};
