

<template>
 <div>

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
</template>



<script>
import axios from 'axios';




export default {
  data() {
    return {
      title: '',
      author: '',
      created_at: '',
      content: ''
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

<style>

 


form {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  margin-top: 20px;
 align-items: center;
}

label {
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 15%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

p {
  color: red;
  margin-top: 5px;
}


</style>