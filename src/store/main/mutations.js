import * as types from "./mutation-types";

export default {
  [types.GET_INFO](state, payload) {
    state.info = payload;
  },
  [types.GET_RESULTS](state, payload) {
    state.results = payload;
  }
}
