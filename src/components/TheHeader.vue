<template>
    <div>
      <nav>
        <router-link to="/" :class="{ active: $route.path === '/' }">About</router-link>
        <router-link to="/contact" :class="{ active: $route.path === '/contact' }">Contact</router-link>

      </nav>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    padding: 5px;
    transition: background-color 0.3s;
  }
  
  nav a.active {
    background-color: #ff07c9;
  }
  </style>
  