<template>
	<div>
		<h2>Home</h2>
		<UserState>
			<template v-slot:user="{ user }">
				<div v-if="user">
					<UserProfile />
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
export default {
	components: {
		LoginRegistrationPage,
		UserState,
		UserProfile,
	},
};
</script>
