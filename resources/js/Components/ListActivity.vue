<script setup>
import { formatDate } from "@/utils/utils.js";
const props = defineProps({
    data: Array,
    title: String,
});

const limitword = (string, num) => {
      let words = string.split(" ");
      let truncated = words.slice(0, num).join(" ");
      return truncated + (words.length > num ? " ..." : "");
    } ;



</script>
<template>
    <section class="py-4 ml-4">
        <div class="container my-4">
            <h2 class="text-3xl font-bold mb-6 text-gray-100">{{ title }}</h2>
            <div class="flex overflow-x-auto">
                <article
                    v-for="(activity) in props.data"
                    :key="activity.id"
                    class="shrink-0 w-2/3 md:w-1/5 lg:w-1/5 xl:w-1/5 pr-4 drop-shadow-xl"
                   
                >
                    <div
                        class="bg-cyan-900 rounded-lg bg-opacity-50 overflow-hidden shadow-lg"
                    >
                        <div class="relative">
                            <img
                                class="w-full h-48 object-cover"
                                :src="'img/'+activity.image"
                                alt="Activity Cover"
                            />
                            <span
                                class="absolute top-3 left-3 inline-block py-1 px-2 bg-gray-100 text-gray-700 rounded"
                                >{{ activity.category.name }}</span
                            >
                            <span
                                class="absolute bottom-3 right-3 inline-block text-white text-xl font-bold"
                                >{{ formatDate(activity.date) }}</span
                            >
                        </div>

                        <div class="p-4">
                            <h3 class="text-xl font-bold mb-2 text-gray-100">
                                {{ limitword(activity.name, 2) }}
                            </h3>
                            <div class="flex items-center mb-2">
                                <span class="text-green-500 mr-1"
                                    ><i class="fas fa-map-marker-alt"></i
                                ></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                                    <circle cx="12" cy="10" r="3" />
                                    </svg>
                                <span class="text-green-500"
                                    >
                                   
                                    {{ activity.location }} -
                                    {{ activity.distance.toFixed(0) }}Km</span
                                >
                            </div>
                
                            <p class="text-gray-100 flex" v-for="user in activity.user" :key="user.id">
                              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg> </span><span  v-if="user.pivot.is_owner === 1"> {{ user.name }}</span>
                             
                            </p>
                            <div class="text-center pb-2">
                                <a
                                    :href="
                                        route('activities.show', {
                                            id: activity.id,
                                        })
                                    "
                                    
                                    class="inline-block mt-4 bg-green-500 hover:bg-green-950 rounded-full px-10 py-1 text-white"
                                    >Infos</a
                                >
                            </div>
                        </div>
                    </div>
                </article>
            </div> 
        </div>
    </section>
</template>