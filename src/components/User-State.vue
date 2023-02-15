<template>
	<div>
		<slot name="user" :user="user"></slot>
	</div>
</template>

<script>
import { ref } from "vue";
import { onAuthStateChanged } from "@firebase/auth";
import { useFirebaseAuth } from "vuefire";
const auth = useFirebaseAuth();
export default {
	setup() {
		const user = ref(null);
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
