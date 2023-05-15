<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
const props = defineProps({
  user: Array,
})
console.log(props)
</script>
<template>
<AppLayout>
    <div class=" font-sans leading-normal tracking-normal  from-teal-300 to-emerald-400 ">

    


<!-- Header avec l'image de l'activité -->

<nav class="flex flex-row items-center justify-between bg-gray-600 p-2  w-full bg-opacity-50">
 
 <a :href="route('dashboard')" class="text-white inline-block mx-2 py-2 px-4  basis-2/3">
<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
 <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
</svg>
</a>

     <button class="text-white inline-block mr-2 rounded-full  ">
<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
 <path d="M8 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8zm6 14H8V6h6v12z"/>
</svg>

</button>


</nav>

<section class="ml-4  py-6">
   
   <div class="flex flex-col items-start mb-4">
     
     <div class="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
     <div>
       <h3 class="text-4xl font-medium text-gray-200 pt-4"> {{ props.user.name }}</h3>
       <h2 class="text-xl font-medium text-gray-200 pt-4">{{ props.user.email }}</h2>
     </div>
   </div>
  
 </section>
     


   

<section class=" ml-4 py-6">
<div class="py-4 ">
    
</div>
</section>
<a class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-6 rounded-2xl ml-4 mb-8" :href="route('add')">
  Ajouter un activité
</a>


</div>
</AppLayout>
</template>