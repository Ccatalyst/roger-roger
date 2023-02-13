<template>
	<aside class="section">
		<h3>Sign in/Register</h3>
		<section v-if="newUser">
			<h4>Register for an account</h4>
			<a href="#" @click="newUser = false">I have an account</a>
		</section>
		<section v-else>
			<h4>Log In</h4>
			<a href="#" @click="newUser = true">I need to register</a>
		</section>
		<label for="email"> Email </label><br />
		<input type="email" name="email" placeholder="email" class="email" v-model="email" />
		<br />
		<!-- <label for="username">Username </label><br />
			<input type="text" name="username" id="username" v-model="username" /> -->
		<label for="password">Password </label><br />
		<input type="password" name="password" placeholder="password" class="password" v-model="password" />
		<br />
		<!-- <label for="confirmPassword">Confirm your password </label><br />
			<input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" /> -->
		<button class="button" @click="formSubmit()">Register</button>
		<p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
	</aside>
</template>

<script>
import { useFirebaseAuth } from "vuefire";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";

const auth = useFirebaseAuth();
console.log(auth);
export default {
	data() {
		return {
			auth,
			newUser: false,
			email: "",
			password: "",
			errorMessage: "",
			loading: false,
		};
	},
	methods: {
		async formSubmit() {
			this.loading = true;
			this.errorMessage = "";
			try {
				if (this.newUser) {
					await createUserWithEmailAndPassword(auth, this.email, this.password);
				} else {
					await signInWithEmailAndPassword(auth, this.email, this.password);
				}
			} catch (err) {
				this.errorMessage = err.message;
			}
		},
	},
};
</script>

<style></style>
