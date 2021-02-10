import Vue from "vue";
import Vuex from "vuex";
import main from "./main";
import character from "./character";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        main,
        character
    },
});

export default store;
