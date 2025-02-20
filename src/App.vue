<script>
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
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <FooterItem v-if="!isSignUpPage" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
