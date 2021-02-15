import * as types from "./mutation-types";

export default {
  [types.SET_RESULTS](state, payload) {
    state.results = payload;
  },
  [types.GET_DATA](state, { info, results }) {
    state.info = info;
    state.results = results;
  }
}
