<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">ID : </label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">PW : </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					v-bind:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
					:class="!isUsernameValid || !password ? 'disabled' : null"
				>
					로그인
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { loginUser } from "@/api/auth.js";
import { validateEmail } from "@/utils/validation.js";

export default {
	data() {
		return {
			username: "",
			password: "",
			logMessage: "",
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				//필요한 비지니스 로직
				const loginData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(loginData);
				// 메인 페이지로 이동 //
				console.log(data.token);
				this.$store.commit("setToken", data.token);
				this.$store.commit("setUsername", data.user.username);
				// this.logMessage = `${data.user.username} 님 환영합니다.`;
				this.$router.push("/main");
				// < router-link to="" > //
				// this.initForm();
			} catch (error) {
				// 에러 핸들링 코드
				console.log(error.response.data);
				this.logMessage = error.response.data;
				// this.initForm();
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = "";
			this.password = "";
		},
	},
};
</script>

<style>
.btn {
	color: white;
}
</style>
