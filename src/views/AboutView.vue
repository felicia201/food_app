<template>
  <div class="about-page">
    <div class="background-image"></div>
    <div class="content-container">
      <div class="block block1">
        <h2>Notre Histoire</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vel nulla at tempus.</p>
      </div>
      <div class="block block2">
        <h2>Notre Équipe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vel nulla at tempus.</p>
      </div>
      <div class="block block3">
        <h2>Nos Valeurs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vel nulla at tempus.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  position: relative;
  height: 100vh;
  background: url('../assets/Image2.jpg') center/cover no-repeat; /* Remplacez par le chemin de votre image */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Ajoutez une teinte foncée semi-transparente à l'image de fond */
}

.content-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.block {
  width: 80%;
  max-width: 600px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8); /* Fond transparent */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.block h2 {
  color: #333; /* Couleur du texte */
}

.block p {
  font-size: 16px;
  line-height: 1.6;
}

.block1 { background: rgba(240, 235, 235, 0.8); }
.block2 { background: rgba(180, 192, 180, 0.8); }
.block3 { background: rgba(240, 235, 235, 0.8); }
</style>
