<script setup lang="ts">
import { Icon } from '@iconify/vue';

const navigationItems = [
  { label: 'Jury', href: '/jury' },
  { label: 'Reglement', href: '/reglement' },
  { label: 'Kontakt', href: '/kontakt' }
];

const colorMode = useColorMode();
const isActive = ref(false);

const enterNav = () => (isActive.value = !isActive.value);
const exitNav = () => (isActive.value = false);
</script>

<template>
  <header>
    <nav class="flex items-center justify-between bg-secondary p-4 font-bold text-secondary-foreground">
      <div>
        <NuxtLink to="/" class="text-2xl">LSEW</NuxtLink>
      </div>
      <div class="hidden md:block">
        <NuxtLink v-for="item in navigationItems" :key="item.label" :to="item.href" class="mx-2">
          {{ item.label }}
        </NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/login" class="mx-2 hidden md:block">Login</NuxtLink>
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
        <div class="tham tham-e-squeeze tham-w-6 md:hidden" :class="{ 'tham-active': isActive }" @click="enterNav()">
          <div class="tham-box">
            <div class="tham-inner" />
          </div>
        </div>
      </div>
    </nav>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div v-show="isActive" class="fixed inset-0 z-10 transition-opacity">
        <div class="absolute inset-0 bg-black opacity-50" tabindex="0" @click="exitNav()" />
      </div>
    </transition>

    <aside
      class="fixed left-0 top-0 z-10 h-screen w-64 transform bg-white p-4 transition-all duration-500 ease-in-out dark:bg-black"
      :class="isActive ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="mb-8">
        <NuxtLink to="/" class="text-2xl font-bold" @click="exitNav()">LSEW</NuxtLink>
      </div>
      <ul class="divide-y">
        <li v-for="item in navigationItems" :key="item.label">
          <NuxtLink :to="item.href" class="my-4 inline-block" @click="exitNav()">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="fixed bottom-12">
        <NuxtLink to="/login" class="font-bold" @click="exitNav()">Login</NuxtLink>
      </div>
    </aside>
  </header>
</template>
