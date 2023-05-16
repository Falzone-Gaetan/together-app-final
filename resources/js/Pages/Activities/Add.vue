<script setup lang="ts">
import {  reactive, ref } from 'vue';
import axios from 'axios';
import { useCityStore } from '../../stores/cityStore';
import { router } from '@inertiajs/vue3'

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

 
  router.post('/api/activities/add', formData)
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

<template >

<div class="bg-slate-200 pb-6">
  <div class="bg-teal-600 w-full opacity-40">
    <a :href="route('dashboard')" class="text-white inline-block mx-2 py-2 px-4  basis-2/3 ">
<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
 <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
</svg>
</a>
</div>
    <div class="max-w-lg mx-auto ">
      <form @submit.prevent="onSubmit" class="grid gap-6">
       <span hidden>@csrf</span> 
        <label class="relative block w-60 h-80 bg-gray-300 rounded-lg overflow-hidden cursor-pointer mx-auto mt-2 shadow-xl">
  <input type="file" class="absolute inset-0 opacity-0 z-10" @change="onFileChange">
  <div class="absolute inset-0 flex justify-center items-center">
    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
    </svg>
  </div>
  <img :src="imageUrl" v-if="imageUrl" class="absolute inset-0 object-cover w-full h-full">
</label>

<label class="block mx-4 ">
          <span class="text-gray-700 font-semibold">Titre :</span>
          <input type="text" class="mt-1 border-none w-full rounded-lg bg-teal-500  bg-opacity-30 focus:outline-none" v-model="form.name">
        </label>


<label class="block mx-4 ">
        <span class="text-gray-700 block font-semibold">Catégorie :

        </span>
          <div class="mt-1 inline-block " v-for="category in categories">
      <button 
        :key="category.id"
        type="button"
        class="mr-2 mb-2 px-4 py-2 bg-teal-200 rounded-lg bg-opacity-90 border-4"
        :class="{ 'bg-teal-700 text-white': form.category === category.id }"
        @click="form.category = category.id"
      >
        {{ category.name}}
      </button>
  </div>
</label>

      
  
        
  
        <label class="block mx-4">
          <span class="text-gray-700 font-semibold">Lieu :</span>
          <input type="text" class="mt-1 block w-full rounded-lg border-none bg-teal-500  bg-opacity-30 focus:outline-none " v-model="form.location">
        </label>
  
       
  
        <label class="block mx-4">
          <span class="text-gray-700 font-semibold">Date :</span>
          <input type="datetime-local" class="mt-1 block w-full rounded-lg border-none bg-teal-500  bg-opacity-30 focus:outline-none" v-model="form.date">
        </label>
  
   
        <label class="block mx-4">
          <span class="text-gray-700 font-semibold">Description :</span>
          <textarea class="mt-1 block w-full rounded-lg h-52 border-none bg-teal-500  bg-opacity-30 focus:outline-none" v-model="form.description"></textarea>
        </label>
       
        
        <button type="submit" class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-700 mx-4 my-2" >Ajouter</button>
      </form>
    </div>
  </div>

  </template>
 
 
  
  
  
  
  
  
  
