// 학습 노트 조작과 관련된 CRUD API
// 토큰을 필요로 하는 로그인 후의 API
// 학습 노트 데이터를 조회하는 API
import { posts } from "@/api/index.js";

// 학습 노트 데이터 목록을 조회하는 API
function fetchPosts() {
	return posts.get("/");
}

// 특정 학습 노트를 조회하는 API
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트를 생성하는 API
function createPost(postData) {
	return posts.post("/", postData);
}

// 학습 노트를 삭제하는 API
function deletePost(postId) {
	return posts.delete(postId);
}

// 학습 노트를 수정하는 API
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
