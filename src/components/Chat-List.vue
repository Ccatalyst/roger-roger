<template>
	<div>
		<ul>
			<li v-for="chat of chatlist" :key="chat.id">
				<router-link to="{ name: 'chat', params: { id: chat.id} }">{{ chat.id }}</router-link>
			</li>
		</ul>

		<button @click="createChatRoom()" class="button">Create Chat Room</button>
	</div>
</template>

<script>
import { db } from "../firebase";
import { useCollection } from "vuefire";
import { collection, addDoc } from "firebase/firestore";

export default {
	setup() {
		const chats = useCollection(collection(db, "chats"));
		return { chats };
	},
	data() {
		return {
			chatlist: [],
		};
	},
	firestore(chats) {
		return {
			chatlist: chats.where("owner", "==", this.user.uid),
		};
	},
	methods: {
		async createChatRoom(chats) {
			try {
				const newChat = await addDoc(chats, {
					createdAt: Date.now(),
					owner: this.user.id,
					members: [this.user.id],
				});

				console.log(newChat);
			} catch (error) {
				console.log(error);
			}
		},
	},
	props: ["user"],
};
</script>
