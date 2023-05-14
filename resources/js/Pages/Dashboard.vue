<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SearchBar from '../Components/SearchBar.vue';
import listCategories from '../Components/ListCategories.vue';
import ListNearbyActivity from '../Components/ListNearbyActivity.vue';
import { useActivitiesStore  } from '../stores/activitiesStore';
import { useLocationStore } from '../stores/locationStore';
import { onMounted, computed } from 'vue';

const locationStore = useLocationStore();
const activitiesStore = useActivitiesStore();

async function fetchActivities() {
    await locationStore.fetchPosition();
    await activitiesStore.fetchActivities();
}

onMounted(fetchActivities);

const nearestActivities = computed(
    () => activitiesStore.getActivitiesSortedByDistance
);
const nextActivities = computed(
    () => activitiesStore.getActivitiesSortedByDate
);
const categories = computed(() => activitiesStore.categories);
</script>

<template>
    <AppLayout title="Together">
        
        <template #header>
           <SearchBar />
        </template>
        
      <listCategories :categories="categories"/>   
      <ListNearbyActivity  
        :data="nearestActivities"
        :title="'Activités à proximité'"/>
      <ListNearbyActivity
        :data="nextActivities"
        :title="'Activités à venir'"
      />
    </AppLayout>
</template>