<script setup>
import ShareIcon from "@/assets/img/ShareIcon.vue";
</script>
<template>
  <footer class="footer">
    <a href="https://github.com/mxbv/MovieX" class="footer-link" rel="noopener noreferrer"
      >View on Github <ShareIcon />
    </a>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: var(--block-color);
  padding: 10px 20px;
  border: solid 1px var(--border-color);
  border-radius: 15px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
}
.footer-link {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
svg {
  margin-left: 5px;
}
@media screen and (max-width: 768px) {
  .footer {
    width: 70%;
  }
}
</style>
