<template>
    <div class="contact-page">
      <div class="background-image"></div>
      <div class="content-container">
        <form @submit.prevent="submitForm" class="form">
          <div class="form-group">
            <label for="name">Nom :</label>
            <input v-model="formData.name" type="text" id="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email :</label>
            <input v-model="formData.email" type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message :</label>
            <textarea v-model="formData.message" id="message" rows="4" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
  
        <div v-if="showSuccessMessage" class="success-message">
          <p>Merci pour votre message! 🎉</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    message: '',
  });
  
  const showSuccessMessage = ref(false);
  
  const submitForm = () => {
    // Envoi du formulaire (simulé)
    // Vous pouvez implémenter ici l'envoi réel du formulaire vers un serveur
  
    // Réinitialisation des données du formulaire
    formData.value = {
      name: '',
      email: '',
      message: '',
    };
  
    // Affichage du message de succès
    showSuccessMessage.value = true;
  
    // Cacher le message de succès après quelques secondes (simulé)
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 3000);
  };
  </script>
  
  <style scoped>
  .contact-page {
    position: relative;
    height: 100vh;
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
    background: url('../assets/Image2.jpg') center/cover no-repeat; /* Remplacez par le chemin de votre image */
    filter: brightness(0.5); /* Ajustez la luminosité de l'image en arrière-plan */
  }
  
  .content-container {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .form {
    width: 80%;
    max-width: 600px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .success-message {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #4caf50;
    border-radius: 5px;
    background-color: #e7f3eb;
    color: #4caf50;
    display: inline-block;
  }
  </style>
  