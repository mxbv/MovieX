<template>
  <footer class="footer">
    <div class="footer-links">
      <a href="https://github.com/mxbv" class="footer-link" rel="noopener noreferrer">Github</a
      ><a href="mailto:bv.maks@icloud.com" class="footer-link" rel="noopener noreferrer">Email me</a
      ><a href="https://mxbv.github.io/" class="footer-link" rel="noopener noreferrer">mxbv 2025</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
}
.footer-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  background-color: var(--block-color);
  padding: 10px 20px;
  border: solid 1px var(--border-color);
  border-radius: 15px;
  z-index: 10000;
  backdrop-filter: blur(15px);
}

@media screen and (max-width: 768px) {
  .footer-links {
    width: 90%;
  }
}
</style>
