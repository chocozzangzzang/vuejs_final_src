<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">ID : </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password">PW : </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname">NICKNAME : </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button
					type="submit"
					:disabled="!isEmailValid || !password || !nickname"
					class="btn"
					:class="!isEmailValid || !password || !nickname ? 'disabled' : null"
				>
					회원가입
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { registerUser } from "@/api/auth.js";
import { validateEmail } from "@/utils/validation.js";

export default {
	data() {
		return {
			// form values
			username: "",
			password: "",
			nickname: "",

			// log
			logMessage: "",
		};
	},
	computed: {
		isEmailValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			console.log("폼 제출");
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log(data.username);
			this.logMessage = `${data.username} 님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			this.username = "";
			this.password = "";
			this.nickname = "";
		},
	},
};
</script>

<style></style>
