// 라이브러리 로딩
// 컴포넌트 로딩
// test 코드 작성 -- decribe -> test -> expect

import { shallowMount } from "@vue/test-utils";
import SignupForm from "@/components/SignupForm.vue";

describe("SignupForm.vue", () => {
	test("ID가 이메일 형식일 것..", () => {
		const idCheck = shallowMount(SignupForm, {
			data() {
				return {
					username: "test@test.com",
				};
			},
		});
		console.log(idCheck.vm.isEmailValid);
	});

	test("버튼 활성화..", () => {
		const btnCheck = shallowMount(SignupForm, {
			data() {
				return {
					username: "test@test.com",
					password: "1234",
					nickname: "Test User",
				};
			},
		});
		const button = btnCheck.find("button");
		// expect(button.element.disabled).toBeTruthy();
		expect(button.element.disabled).toBeFalsy();
	});
});
