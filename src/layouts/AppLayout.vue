<script setup lang="ts">
import logoUrl from "../assets/salusmeet-logo.svg";
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <header class="border-b bg-white">
      <nav
        class="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <RouterLink to="/app" class="flex items-center gap-2">
          <img :src="logoUrl" alt="Salusmeet" class="h-8 w-auto sm:h-9" />
          <span class="font-bold text-slate-900">SalusMeet</span>
        </RouterLink>

        <div class="flex items-center gap-4 text-sm">
          <RouterLink to="/app" class="text-slate-700 hover:text-slate-900">
            Inicio
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-8">
      <slot />
    </main>
  </div>
</template>
