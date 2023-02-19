<template>
	<div>
		<ul>
			<li v-for="chat of mychats" :key="chat.id">
				<p>{{ chat.id }}</p>
				<!-- <router-link to="{ name: 'chat', params: { id: chat.id} }">{{ chat.id }}</router-link> -->
			</li>
		</ul>

		<button @click="createChatRoom" class="button">Create Chat Room</button>
	</div>
</template>

<script setup>
import { defineProps } from "vue";
import { db } from "../firebase";
import { useCollection } from "vuefire";
import { collection, addDoc } from "firebase/firestore";

const chats = useCollection(collection(db, "chats"));
const props = defineProps({
	uid: String,
});
const mychats = chats.data.value.filter((chat) => chat.owner == props.uid);
console.log(mychats);

async function createChatRoom() {
	try {
		const newChat = await addDoc(collection(db, "chats"), {
			createdAt: Date.now(),
			owner: props.uid,
			members: [props.uid],
		});

		console.log(newChat);
	} catch (error) {
		console.log(error);
	}
}
</script>
