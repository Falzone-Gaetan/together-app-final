<script setup>
defineProps({
    categories: Array,

});
</script>
<template>
    <div class="flex flex-nowrap overflow-x-auto gap-4 ml-2"  style="scroll-snap-type: x mandatory;">
    <div v-for="category in categories" :key="category.id" >
        <div class="flex flex-col items-center">
        <a href="" class=" overflow-hidden  rounded-full w-16 h-16" ><img :src="'img/'+  category.image " alt=""></a>
        <span class="text-slate-200">{{ category.name }}</span>   
        </div>
    </div>
</div>
</template>