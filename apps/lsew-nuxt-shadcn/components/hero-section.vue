<script setup lang="ts">
import { Icon } from '@iconify/vue';

const colorMode = useColorMode();
const nextCompetitionDate = '28./29. September 2024';
const nextCompetitionLocation = 'Marbach LU';
</script>

<template>
  <main class="mx-4 flex flex-col items-center lg:mx-auto lg:w-1/2">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline">
          <Icon
            icon="radix-icons:moon"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="radix-icons:sun"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="colorMode.preference = 'light'"> Light </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'dark'"> Dark </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'system'"> System </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <h1 class="my-8 text-center text-4xl font-bold md:text-6xl">
      Luzerner <span class="text-5xl text-secondary md:text-8xl">Solo</span> und
      <span class="text-5xl text-secondary md:text-8xl">Ensemble</span> Wettbewerb
    </h1>

    <img src="assets/img/scores.png" alt="scores" >

    <div class="mt-8 rounded-xl border-2 border-secondary bg-accent p-8 text-center">
      <p>Nächster Wettbewerb:</p>
      <p class="font-bold">{{ nextCompetitionDate }}</p>
      <p class="text-2xl font-bold text-secondary">in {{ nextCompetitionLocation }}</p>
      <Button class="mt-8">Jetzt anmelden</Button>
    </div>
  </main>
</template>
