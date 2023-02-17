<template>
	<div>
		<button @click="createChatRoom()" class="button">Create Chat Room</button>
	</div>
</template>

<script>
import { db } from "../firebase";
import { collection } from "@firebase/firestore";

export default {
	data() {
		return {
			chats: [],
		};
	},
	firestore() {
		return {
			chats: collection(db, "chats").where("owner", "==", this.uid),
		};
	},
	methods: {
		async createChatRoom() {
			const newChat = await collection(db, "chats").add({
				createdAt: Date.now(),
				owner: this.uid,
				members: [this.uid],
			});
			console.log(newChat);
		},
	},
	props: ["uid"],
};
</script>
