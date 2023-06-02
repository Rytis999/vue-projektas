<template>
 <div>

<form @submit="submitForm">
<label for="title">Title</label>
<input type="text" id="title" v-model="title">
<br>
<label for="content">Content</label>
<textarea id="content" v-model="content"></textarea>
<br>
<button type="submit">Save</button>
<p></p>



</form>


 </div>
</template>



<script>


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