<template>
	<div>
		Logged in as {{ user }}<br />
		<button @click="signOut()" class="button">Log Out</button>
	</div>
</template>

<script>
import { useFirebaseAuth } from "vuefire";
import { signOut } from "@firebase/auth";
const auth = useFirebaseAuth();
export default {
	data() {
		return {
			auth,
		};
	},
	methods: {
		// This is the method used via the @click on the button element
		async signOut() {
			try {
				// This is the imported method from "@firebase/auth"
				signOut(auth);
			} catch (err) {
				console.log(err);
			}
		},
	},
	props: ["user"],
};
</script>
