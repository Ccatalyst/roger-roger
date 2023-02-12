<template>
	<aside class="section">
		<h3>Sign in (Anonymous)</h3>
		<form action="" name="registration" type="post" enctype="plain">
			<label>
				<input type="email" name="email" />
			</label>
			<label>
				<input type="text" name="username" />
			</label>
			<label>
				<input type="password" name="password" />
			</label>
			<label>
				<input type="password" name="confirmPassword" />
			</label>
			<button class="button">Register</button>
		</form>
	</aside>
</template>

<script>
import { useFirebaseAuth } from "vuefire";
// import { createUserWithEmailAndPassword } from "@firebase/auth";

const auth = useFirebaseAuth();

// const formSubmit = () => {};

export default {
	data() {
		return {
			auth,
		};
	},
};
</script>

<style></style>
