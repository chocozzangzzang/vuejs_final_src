import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		username: "",
		token: "",
	},
	getters: {
		isLogin(state) {
			return state.username !== "";
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = "";
		},
		setToken(state, token) {
			state.token = token;
		},
		clearToken(state) {
			state.token = "";
		},
	},
});

export default store;
