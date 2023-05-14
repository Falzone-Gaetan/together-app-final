<script setup>

</script>

<template>
    <div class="flex flex-col items-center">
        <a href="" class=" overflow-hidden  rounded-full w-16 h-16" ><img :src="'img/'+  category.image " alt=""></a>
        <span class="text-slate-200">{{ category.name }}</span>   
    </div>
</template>