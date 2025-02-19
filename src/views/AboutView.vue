<script></script>

<template>
  <main class="about">
    <div class="container">
      <h3 class="about-title">About MovieX</h3>
      <p class="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex purus, iaculis ut
        eleifend ut, tempus a eros. Morbi non fermentum turpis. Nulla tincidunt finibus lectus, id
        gravida erat lacinia porttitor. Etiam eleifend tortor nisi, sed lacinia purus luctus id.
        Aenean laoreet, lectus nec consequat pretium, purus lorem sollicitudin odio, eu suscipit
        nisl nunc at lacus. Mauris varius, metus in tincidunt pellentesque, nibh quam condimentum
        magna, a fringilla nibh eros et nunc. Vivamus eget odio imperdiet, dignissim diam eu,
        posuere lacus. Fusce blandit tortor a tortor rhoncus interdum. <br />
        <br />
        Morbi congue ante non sem condimentum interdum. Praesent dignissim nec eros dapibus
        dignissim. Mauris urna dolor, accumsan sed elementum a, varius id diam. Praesent vitae
        ligula eget ipsum tincidunt sagittis sed ac velit. Aenean feugiat lectus sapien, a vehicula
        odio varius sed. Nunc quis orci tempus, venenatis dolor non, luctus metus. Morbi non purus
        leo. Sed eget porttitor risus. Phasellus laoreet, felis vitae molestie venenatis, diam lacus
        luctus velit, a elementum nibh nulla vitae tellus. Nullam convallis ornare libero vitae
        sollicitudin. Ut quis urna quam. Mauris sed faucibus dolor. Ut libero augue, dictum at
        ullamcorper quis, dictum feugiat nunc. Nam faucibus ullamcorper porta. Fusce pulvinar sit
        amet enim nec iaculis.
      </p>
    </div>
  </main>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
}
.about-title {
  font-size: 2rem;
}
.about-text {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .about {
    height: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
</style>
