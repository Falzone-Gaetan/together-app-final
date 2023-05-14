<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import NavBar from '../Components/NavBar.vue';
import Banner from '@/Components/Banner.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gradient-to-b from-teal-300 to-emerald-400 pb-12">
            

            <!-- Page Heading -->
            <header v-if="$slots.header" class="">
                <div class=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <NavBar />
        </div>
    </div>
</template>
