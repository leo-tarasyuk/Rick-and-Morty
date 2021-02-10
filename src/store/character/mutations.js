import * as types from "./mutation-types";

export default {
  [types.GET_CHARACTER](state, payload) {
    state.character = payload;
  }
}
