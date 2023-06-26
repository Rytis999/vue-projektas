<template>
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <h2>Edit Post</h2>
        <form @submit.prevent="savePost">
          <div>
            <label for="author">Author:</label>
            <input type="text" id="author" v-model="editedPost.author" />
          </div>
          <div>
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="editedPost.title" />
          </div>
          <div>
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="editedPost.date" />
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" @click="cancelEdit">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      article: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        editedPost: { ...this.article }  
      };
    },
    methods: {
      savePost() {
        this.$emit('save', this.editedPost);  
      },
      cancelEdit() {
        this.$emit('cancel');  
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  form {
    display: grid;
    gap: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  button {
    margin-top: 10px;
  }
  </style>