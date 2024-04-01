// 로그인 회원가입 회원탈퇴
// 토큰이 필요없는 로그인 전의 API
// 회원가입 API
import { instance } from "@/api/index.js";

function registerUser(userData) {
	// const url = "http://localhost:5000/signup";
	// return axios.post(url, userData);
	return instance.post("signup", userData);
}

// 로그인 API
function loginUser(userData) {
	return instance.post("login", userData);
}

export { registerUser, loginUser };
