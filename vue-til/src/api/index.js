import axios from "axios";
import { setInterceptors } from "./common/interceptors.js";

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// axios 초기화 함수
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});

	return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth("posts");
// axios.post("http://localhost:5000/signup");
// instancer("signup");

/*
// 토큰이 필요없는 로그인 전의 API
// 회원가입 API
function registerUser(userData) {
	// const url = "http://localhost:5000/signup";
	// return axios.post(url, userData);
	return instance.post("signup", userData);
}

// 로그인 API
function loginUser(userData) {
	return instance.post("login", userData);
}
*/

/*
// 토큰을 필요로 하는 로그인 후의 API
// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return instance.get("posts");
}

// 학습 노트를 생성하는 API
function createPost(postData) {
	return instance.post("posts", postData);
}
*/

/*
	GET    - posts
	POST   - posts
	PUT    - posts/{id}
	DELETE - posts/{id}
*/

export // registerUser, loginUser,
// fetchPosts, createPost,
 {};
