<template>
	<div>
		<h2>Home</h2>
		<UserState>
			<template v-slot:user="{ user }">
				<div v-if="user">
					<h4>User Profile</h4>
					<UserProfile :user="user" />
					<h4>My Chat Rooms</h4>
					<ChatList :uid="user.uid" />
				</div>
				<LoginRegistrationPage v-else />
			</template>
		</UserState>
	</div>
</template>
<script>
import LoginRegistrationPage from "./Login-Registration-Page.vue";
import UserState from "./User-State.vue";
import UserProfile from "./User-Profile.vue";
import ChatList from "./Chat-List.vue";
export default {
	components: {
		LoginRegistrationPage,
		UserState,
		UserProfile,
		ChatList,
	},
};
</script>
