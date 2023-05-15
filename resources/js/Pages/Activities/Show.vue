<script setup>
import { formatDate } from "@/utils/utils.js";
import AppLayout from '@/Layouts/AppLayout.vue';
defineProps({
    activity: Object,
});


</script>
<template>
    <AppLayout :title="activity.name">
    <div class=" font-sans leading-normal tracking-normal  from-teal-300 to-emerald-400 ">

    


<!-- Header avec l'image de l'activité -->
<header class="bg-cover bg-center h-96 pt-32 pb-16 relative" :style="{ backgroundImage: 'url(/img/' + activity.image + ')' }">
    <nav class="flex flex-row items-center justify-between bg-gray-600 p-2 absolute top-0 w-full bg-opacity-50">
 
 <a :href="route('dashboard')" class="text-white inline-block mx-2 py-2 px-4  basis-2/3">
<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
 <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
</svg>
</a>
 <button class="text-white inline-block mr-2 rounded-full w-10 h-10">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="bookmark" class="h-6 w-6 fill-current"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"></path></svg>

 </button>
     <button class="text-white inline-block mr-2 rounded-full  w-10 h-10">
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="edit" class="h-6 w-6 fill-current" ><path d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path><path d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path></svg>

</button>


</nav>
      <div class="absolute bottom-0 left-0 right-0 px-6">
        <h1 class="text-2xl font-bold text-white">{{ activity.name }}</h1>
        <div class=" rounded-lg bg-slate-100 my-2 inline-flex px-4 text-green-500 py-1">
         <span class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
          </svg> </span> 
              <span>{{ activity.location }}</span>
            </div>
      </div>
      
    </header>
    <section class="">
        <div class="bg-teal-800 flex flex-raw items-center justify-between py-2">
            <h2 class="text-xl font-bold text-gray-200 mx-4">{{ formatDate(activity.date) }}</h2>
            <div class="rounded-lg bg-slate-100 items-center px-2 mx-4 my-2 ">
              
              {{ activity.category.name }}
            </div>
        </div>

    </section>

    <!-- Section de description de l'activité -->
    <section class=" py-6 px-6">
      <h2 class="text-2xl font-bold text-gray-200 mb-2">Description</h2>
      <p class="text-gray-200 leading-normal">{{ activity.description }}  </p>
    </section>

    <!-- Section de la carte Google Maps -->
    <section class="py-6 px-6">
      <h2 class="text-xl font-bold text-gray-200 mb-2">{{ activity.location }}</h2>
      <div class="h-48">
        <!-- Ici, on peut intégrer la carte Google Maps -->
        <div class="bg-gray-500 text-white h-full flex items-center justify-center rounded-xl">Carte Google Maps</div>
      </div>
    </section>

    <section class=" px-4 py-6">
   
  <div class="flex flex-col items-start mb-4" v-for="user in activity.user" :key="user.id">
    <h2 class="text-xl font-bold text-gray-200 py-4">Organisé par </h2>
    <a  v-if="user.pivot.is_owner === 1" :href="
      route('profile.show', {
            id: user.id,
      })">
    <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
  </a>
    <div >
      <h3 class="text-lg font-medium text-gray-200 pt-4"  v-if="user.pivot.is_owner === 1">{{ user.name }}</h3>
      <p class="text-sm text-gray-200">Fonction de l'auteur</p>
    </div>
  </div>
 
</section>

<section class=" px-4 py-6">
<div class="py-4 ">
    <h3 class="text-lg  text-gray-200 font-bold mb-2">Nombre de participants</h3>
    <div class="grid grid-cols-6 gap-1 my-4" v-for="user in activity.user" :key="user.id">
        <img class="w-10 h-10  rounded-full object-cover mr-2" src="https://via.placeholder.com/150" :alt="user.id">

    </div>
</div>
</section>

<button class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-6 rounded-2xl ml-4 mb-8" >
  Inscription
</button>

</div>
</AppLayout>
</template>
