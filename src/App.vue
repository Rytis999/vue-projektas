<script setup>
import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>
  <nav>
     
        <RouterLink to="/about">Post page</RouterLink>
        <RouterLink to="/posts-detail-page">Post detail page</RouterLink>
        <RouterLink to="/edit-post-page">Edit post page</RouterLink>
  </nav>

  
  
  
  <RouterView />
</template>

<style >
 
 nav {
  background-color: #0f0707;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  transition: background-color 0.3s;
}

nav a {
  margin-right: 10px;
  padding: 5px 10px;
  text-decoration: none;
  color: #333;
  border-radius: 3px;
  color: white;
}

nav a:hover {
  background-color: #ddd;
}




</style>
