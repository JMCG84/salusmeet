<script setup lang="ts">
import logoUrl from "../assets/salusmeet-logo.svg";
import { useRouter } from "vue-router";

import { authService } from "../services/auth.service";

const router = useRouter();

function handleLogout() {
  authService.logout();
  router.push("/login");
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <header class="bg-linear-to-r from-emerald-400 to-emerald-500">
      <nav
        class="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <RouterLink to="/app" class="flex items-center gap-2">
          <img :src="logoUrl" alt="SalusMeet" class="h-8 w-auto sm:h-9" />
          <span class="font-bold text-white">SalusMeet</span>
        </RouterLink>

        <div class="flex items-center gap-4 text-sm">
          <RouterLink
            to="/app"
            class="text-white/90 font-bold underline hover:text-white transition">
            Inicio
          </RouterLink>
        </div>

        <button
          @click="handleLogout"
          class="rounded-xl bg-white/10 text-white px-3 py-1.5 font-medium hover:bg-white/20 transition backdrop-blur-sm">
          Cerrar sesión
        </button>
      </nav>
    </header>
    <main class="mx-auto max-w-5xl px-4 py-8">
      <slot />
    </main>
  </div>
</template>
