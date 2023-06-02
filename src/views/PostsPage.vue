<template>
  <div class="about">
    <div class="article-list">
      <div v-for="article in articles" :key="article.id" class="article-card">
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-info">Author: {{ getAuthorName(article.author) }}</p>
        <p class="article-info">Created: {{ formatDate(article.created_at) }}</p>
        <p class="article-info">Updated: {{ formatDate(article.updated_at) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      authors: []
    };
  },
  mounted() {
    Promise.all([
      fetch('http://localhost:3000/articles').then(response => response.json()),
      fetch('http://localhost:3000/authors').then(response => response.json())
    ])
      .then(([articlesData, authorsData]) => {
        this.articles = articlesData;
        this.authors = authorsData;
      })
      .catch(error => {
        console.error('Error:', error);
      });
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

<style>
.about {
  padding: 20px;
}

.article-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.article-card {
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article-title {
  font-size: 18px;
  margin: 0;
}

.article-info {
  margin-top: 10px;
  font-size: 14px;
}
</style>