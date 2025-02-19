<template>
  <div class="footer">
    <div class="footer-links">
      <a href="https://github.com/mxbv" class="footer-link" rel="noopener noreferrer">Github</a
      ><a href="mailto:bv.maks@icloud.com" class="footer-link" rel="noopener noreferrer">Email me</a
      ><a href="https://mxbv.github.io/" class="footer-link" rel="noopener noreferrer">mxbv 2025</a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  position: absolute;
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
}
.footer-link {
  text-decoration: none;
}
.footer-link:hover {
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  .footer-links {
    width: 90%;
  }
}
</style>
