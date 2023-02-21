<template>
	<div>
		Logged in as {{ props.user.uid }}<br />
		<button @click="signOutClick()" class="button">Log Out</button>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

import { useFirebaseAuth } from "vuefire";
import { signOut } from "@firebase/auth";
const auth = useFirebaseAuth();
const props = defineProps({
	user: String,
});

// This is the method used via the @click on the button element
const signOutClick = async () => {
	try {
		// This is the imported method from "@firebase/auth"
		await signOut(auth);
	} catch (err) {
		console.log(err);
	}
};
</script>
