<!-- <template>
  <div>
    <button @click="showModal = true">Edit</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Edit Post</h3>

        <form @submit.prevent="savePost">
          <div>
            <label>Title:</label>
            <input v-model="title" required>
          </div>
          <div>
            <label>Content:</label>
            <textarea v-model="content" required></textarea>
          </div>
          <button type="submit">Save</button>
          <button type="button" @click="closeModal">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      showModal: false
    };
  },
  methods: {
    savePost() {
      const updatedPost = {
        title: this.title,
        content: this.content
      };

      // Perform the save operation using updatedPost object
      // For example, make a POST request to your server

      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    resetForm() {
      this.title = '';
      this.content = '';
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

.modal-content h3 {
  margin-top: 0;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-content form label {
  font-weight: bold;
}

.modal-content form input,
.modal-content form textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-content form button[type="submit"],
.modal-content form button[type="button"] {
  padding: 5px 10px;
  border-radius: 4px;
}

.modal-content form button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
}

.modal-content form button[type="button"] {
  background-color: #ccc;
  color: white;
  border: none;
}
</style>

 -->





<template>
  <div>
    <button @click="showModal = true">Add post</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Add post</h3>


        
<form @submit="submitForm">
<label for="title">Title</label>
<input type="text" id="title" v-model="title">
<br>
<label for="author">Author</label>
<input type="text" id="author" v-model="author">
<br>
<label for="content">Content</label>
<textarea id="content" v-model="content"></textarea>
<br>
<button type="submit">Save</button>
<p v-if="erorrMessage">{{erorrMessage}}</p>



</form>

        
      </div>
    </div>
  </div>
</template>

 
<script>
import axios from 'axios';




export default {
  data() {
    return {
      title: '',
      author: '',
      created_at: '',
      content: '',
      showModal:false
    };
  },
  
  methods: {
    submitForm() {
      this.created_at = new Date().toISOString();
 
      const formData = {
        title: this.title,
        author: this.author,
        created_at: this.created_at,
        content: this.content
      };

  
      axios.post('http://localhost:3000/articles', formData)
        .then(response => {
      
          console.log('Form data saved:', response.data);
 
          this.title = '';
          this.author = '';
          this.created_at = '';
          this.content = '';
        })
        .catch(error => {
      
          console.error('Error saving form data:', error);
        });
    }
  }
}
</script>
<style scoped>
 .modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

.modal-content h3 {
  margin-top: 0;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-content form label {
  font-weight: bold;
}

.modal-content form input,
.modal-content form textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-content form button[type="submit"],
.modal-content form button[type="button"] {
  padding: 5px 10px;
  border-radius: 4px;
}

.modal-content form button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
}

.modal-content form button[type="button"] {
  background-color: #ccc;
  color: white;
  border: none;
}
</style>