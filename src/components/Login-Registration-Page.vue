<template>
	<aside class="section">
		<h3>Sign in/Register</h3>
		<section v-if="newUser">
			<h4>Register for an account</h4>
			<a href="#" @click="newUser = false">I have an account</a><br />
			<label for="email"> Email </label><br />
			<input type="email" name="email" placeholder="email" class="email" v-model="email" />
			<br />
			<label for="username">Username </label><br />
			<input type="text" name="username" id="username" placeholder="username" v-model="username" /><br />
			<label for="password">Password </label><br />
			<input type="password" name="password" placeholder="password" class="password" v-model="password" />
			<br />
			<button class="button" @click="formSubmit()">Register</button>
			<h5>...or Register Anonymously</h5>
			<button class="button" @click="anonRegister()">Register Anonymously</button>
		</section>
		<section v-else>
			<h4>Log In</h4>
			<a href="#" @click="newUser = true">I need to register</a><br />
			<label for="email"> Email </label><br />
			<input type="email" name="email" placeholder="email" class="email" v-model="email" />
			<br />

			<label for="password">Password </label><br />
			<input type="password" name="password" placeholder="password" class="password" v-model="password" />
			<br />
			<button class="button" @click="formSubmit()">Log In</button>
		</section>

		<p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
	</aside>
</template>

<script>
import { useFirebaseAuth } from "vuefire";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from "@firebase/auth";

const auth = useFirebaseAuth();
export default {
	data() {
		return {
			auth,
			newUser: false,
			email: "",
			username: "",
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
			this.loading = false;
		},
		async anonRegister() {
			this.loading = true;
			this.errorMessage = "";
			try {
				await signInAnonymously(auth);
			} catch (err) {
				this.errorMessage = err.message;
			}
			this.loading = false;
		},
	},
};
</script>

<style></style>
