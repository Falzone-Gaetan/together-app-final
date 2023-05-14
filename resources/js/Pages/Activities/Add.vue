<script setup lang="ts">
import {  computed, onActivated, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import AppLayout from '@/Layouts/AppLayout.vue';


defineProps({
  activity: { type: Object },
  categories: { type: Object }
});
const form = reactive({
  name: '',
  description: '',
  location: '',
  latitude: '',
  longitude: '',
  date: '',
  image: '',
  category: '',
  
});


const imageUrl = ref('');

const onFileChange = (event) => {
  const file = event.target.files[0];
  form.image = file;
  imageUrl.value = URL.createObjectURL(file);
};

const onSubmit = () => {
  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('description', form.description);
  formData.append('location', form.location);
  formData.append('latitude', form.latitude);
  formData.append('longitude', form.longitude);
  formData.append('date', form.date);
  formData.append('category_id', form.category);
  formData.append('image', form.image);

 
  axios.post('/api/activities/add', formData)
    .then(response => {
      console.log('Response:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  console.log(Object.fromEntries(formData.entries()));
  resetForm();
};

const resetForm = () => {
  form.name = '';
  form.description = '';
  form.location = '';
  form.latitude = '';
  form.longitude = '';
  form.date = '';
  form.category = '';
  form.image = '';
  imageUrl.value = '';
};
</script>

<template>
  <AppLayout :title="'Ajout activité'">
    <a :href="route('dashboard')" class="text-white inline-block mx-2 py-2 px-4  basis-2/3">
<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
 <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
</svg>
</a>
    <div class="max-w-lg mx-auto">
      <form @submit.prevent="onSubmit" class="grid gap-6">
        @csrf
        <label class="block">
          <span class="text-gray-700">Nom :</span>
          <input type="text" class="mt-1 block w-full" v-model="form.name">
        </label>
  
        <label class="block">
          <span class="text-gray-700">Description :</span>
          <textarea class="mt-1 block w-full" v-model="form.description"></textarea>
        </label>
  
        <label class="block">
          <span class="text-gray-700">Lieu :</span>
          <input type="text" class="mt-1 block w-full" v-model="form.location">
        </label>
  
        <label class="block">
          <span class="text-gray-700">Coordonnée :</span>
          <input type="text" class="mt-1 block w-full" v-model="form.latitude">
          <input type="text" class="mt-1 block w-full" v-model="form.longitude">
        </label>
  
        <label class="block">
          <span class="text-gray-700">Date :</span>
          <input type="datetime-local" class="mt-1 block w-full" v-model="form.date">
        </label>
  
        <label class="block">
          <span class="text-gray-700">Image :</span>
          <input type="file" class="mt-1 block w-full" @change="onFileChange">
          <img :src="imageUrl" v-if="imageUrl">
        </label>
  
        <label class="block">
        <span class="text-gray-700">Catégorie :</span>
          <div class="mt-1  " v-for="category in categories">
      <button 
        :key="category.id"
        type="button"
        class="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-300"
        :class="{ 'bg-indigo-800 text-white': form.category === category.id }"
        @click="form.category = category.id"
      >
        {{ category.name}}
      </button>
  </div>
</label>
        
        <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500" >Ajouter</button>
      </form>
    </div>
  </AppLayout>
  </template>
 
 
  
  
  
  
  
  
  
