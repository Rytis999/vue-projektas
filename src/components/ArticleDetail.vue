<template>
    <div>
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <p>Author: {{ getAuthorName(article.author) }}</p>
      <p>Created: {{ formatDate(article.created_at) }}</p>
      <p>Updated: {{ formatDate(article.updated_at) }}</p>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      },
      authors: {
        type: Array,
        required: true
      }
    },
    methods: {
      getAuthorName(authorId) {
        const author = this.authors.find(author => author.id === authorId);
        return author ? author.name : '';
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
      }
    }
  };
  </script>