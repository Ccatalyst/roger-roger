<template>
	<div>
		<slot name="user" :user="user"></slot>
	</div>
</template>

<script setup>
import { onUnmounted } from "vue";
import { onAuthStateChanged } from "@firebase/auth";
import { useFirebaseAuth, useCurrentUser } from "vuefire";
const auth = useFirebaseAuth();

const user = useCurrentUser(auth);
// const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => (user.value = firebaseUser));

onUnmounted(() => onAuthStateChanged(auth, (firebaseUser) => (user.value = firebaseUser)));
</script>
