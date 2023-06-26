<template>
  <div>
    <div class="about">
      <div class="article-list">
        <div v-for="article in articles" :key="article.id" class="article-card">
          <h3 class="article-title">
            <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }">
              {{ article.title }}
            </router-link>
          </h3>
          <p class="article-info">Author: {{ getAuthorName(article.author) }}</p>
          <p class="article-info">Created: {{ formatDate(article.created_at) }}</p>
          <p class="article-info">Updated: {{ formatDate(article.updated_at) }}</p>
          <button @click="deletePost(article.id)">Delete</button>
          <button @click="showEditModal(article)">Edit post</button>
        </div>
      </div>
    </div>
    <AddPost>Add post</AddPost>
    <EditPostModal
      :visible="editModalVisible"
      :article="selectedArticle"
      @save="saveEditedPost"
      @cancel="cancelEdit"
    ></EditPostModal>
  </div>
</template>

<script>
import AddPost from '../components/AddPost.vue';
import EditPostModal from '../components/EditPostModal.vue';
import ArticleDetail from '../components/ArticleDetail.vue';

export default {
  components: {
    AddPost,
    EditPostModal,
    ArticleDetail
  },
  data() {
    return {
      articles: [],
      authors: [],
      editModalVisible: false,
      selectedArticle: null
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
    },
    deletePost(articleId) {
      fetch(`http://localhost:3000/articles/${articleId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            console.log('Post deleted');
          } else {
            console.error('Error deleting post');
          }
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
    },
    showEditModal(article) {
      this.selectedArticle = article;
      this.editModalVisible = true;
    },
    saveEditedPost(updatedPostData) {
      const articleId = this.selectedArticle.id;
      const post = this.articles.find(article => article.id === articleId);

      fetch(`http://localhost:3000/articles/${articleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPostData),
      })
        .then(response => {
          if (response.ok) {
            console.log('Post updated');
            // Update the corresponding post object in the articles array with the updated data
            post.title = updatedPostData.title;
            post.content = updatedPostData.content;
            // You can also update other properties if needed
          } else {
            console.error('Error updating post');
          }
        })
        .catch(error => {
          console.error('Error updating post:', error);
        });
    },
    cancelEdit() {
      this.editModalVisible = false;
      this.selectedArticle = null;
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