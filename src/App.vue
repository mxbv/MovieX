<script>
// import { RouterView } from "vue-router";
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { HeaderItem, FooterItem },
  setup() {
    const route = useRoute();
    const isSignUpPage = computed(() => route.name === "Sign Up");

    return { isSignUpPage };
  },
};
</script>

<template>
  <HeaderItem v-if="!isSignUpPage" />
  <router-view></router-view>
  <FooterItem v-if="!isSignUpPage"/>
</template>

<style scoped></style>
