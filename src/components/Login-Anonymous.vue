<template>
	<aside class="section">
		<h3>Sign in (Anonymous)</h3>
		<button class="button" @click="auth.signInAnonymously(auth)">Sign In</button>
	</aside>
</template>

<script>
import { useFirebaseAuth } from "vuefire";
const auth = useFirebaseAuth();
console.log(auth);
export default {
	data() {
		return {
			auth,
		};
	},
};
</script>

<style></style>
