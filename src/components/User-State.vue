<template>
	<div>
		<slot name="user" :user="user"></slot>
	</div>
</template>

<script>
import { onAuthStateChanged } from "@firebase/auth";
import { useFirebaseAuth, useCurrentUser } from "vuefire";
const auth = useFirebaseAuth();
export default {
	setup() {
		const user = useCurrentUser(auth);
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => (user.value = firebaseUser));
		return {
			user,
			unsubscribe,
		};
	},

	unmounted() {
		this.unsubscribe();
	},
};
</script>
