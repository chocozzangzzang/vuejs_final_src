// 학습 노트 조작과 관련된 CRUD API
// 토큰을 필요로 하는 로그인 후의 API
// 학습 노트 데이터를 조회하는 API
import { posts } from "@/api/index.js";

function fetchPosts() {
	return posts.get("/");
}

// 학습 노트를 생성하는 API
function createPost(postData) {
	return posts.post("/", postData);
}

export { fetchPosts, createPost };
