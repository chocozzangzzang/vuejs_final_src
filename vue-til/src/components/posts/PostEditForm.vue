<template>
	<div class="contents">
		<h1 class="page-header">Edit post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title : </label>
					<input type="text" id="title" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents : </label>
					<textarea type="text" id="contents" rows="5" v-model="contents" />
					<p class="validation-text warning" v-if="!isContentsValid">
						Contents' Length Must Be Less Than 200
					</p>
				</div>
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { fetchPost, editPost } from "@/api/posts.js";

export default {
	data() {
		return {
			title: "",
			contents: "",
			logMessage: "",
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			const postId = this.$route.params.id;
			try {
				await editPost(postId, {
					title: this.title,
					contents: this.contents,
				});
				this.$router.push("/main");
			} catch (error) {
				this.logMessage = error;
			}
		},
	},
	async created() {
		const postId = this.$route.params.id;
		const { data } = await fetchPost(postId);
		// console.log(data);
		this.title = data.title;
		this.contents = data.contents;
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
