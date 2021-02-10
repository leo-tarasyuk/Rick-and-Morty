import * as types from "./mutation-types";

/**
 * Selects project and saves in working context
 * @param  {Object} context  Menu store context
 * @param  {Object} payload  Visiable Description
 */

function setCharacter({ commit }, payload) {
    commit(types.GET_CHARACTER, payload);
}

export default {
    setCharacter
};
