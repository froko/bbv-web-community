<script setup lang="ts">
const nextCompetitionDate = '28./29. September 2024';
const nextCompetitionLocation = 'Marbach LU';
</script>

<template>
  <main class="mx-4 flex flex-col items-center lg:mx-auto lg:w-1/2">
    <h1 class="my-8 text-center text-4xl font-bold md:text-6xl lg:my-2">
      Luzerner <span class="text-5xl text-secondary md:text-8xl">Solo</span> und
      <span class="text-5xl text-secondary md:text-8xl">Ensemble</span> Wettbewerb
    </h1>

    <img src="assets/img/scores.png" alt="scores" >

    <div class="mt-8 rounded-xl border-2 border-secondary bg-accent p-8 text-center lg:mt-8">
      <p>Nächster Wettbewerb:</p>
      <p class="font-bold">{{ nextCompetitionDate }}</p>
      <p class="text-2xl font-bold text-secondary">in {{ nextCompetitionLocation }}</p>
      <Button class="mt-8" @click="navigateTo('anmeldung')">Jetzt anmelden</Button>
    </div>
  </main>
</template>
