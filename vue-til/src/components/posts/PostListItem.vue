<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from "@/api/posts.js";

export default {
	props: {
		postItem: {
			type: Object,
			required: true, // 없으면 validation error
		},
	},
	// filters: {
	// 	formatDate(value) {
	// 		return new Date(value);
	// 	},
	// }, /utils/filters.js 로 전역 필터 선언
	methods: {
		async deleteItem() {
			if (confirm("You want to delete it?")) {
				await deletePost(this.postItem._id);
				this.$emit("refresh");
				console.log("deleted");
			}
		},
		routeEditPage() {
			const postId = this.postItem._id;
			this.$router.push(`/post/${postId}`);
		},
	},
};
</script>

<style></style>
