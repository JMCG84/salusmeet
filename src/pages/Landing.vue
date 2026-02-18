<script setup lang="ts">
import PublicLayout from "../layouts/PublicLayaout.vue";
import logoUrl from "../assets/salusmeet-logo.svg";
</script>

<template>
  <PublicLayout>
    <section class="bg-white border rounded-2xl shadow-sm p-8">
      <div class="flex items-center gap-3">
        <img :src="logoUrl" alt="Salusmeet" class="h-10 w-auto sm:h-12" />
        <span
          class="text-sm font-medium text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
          Comunidad de Apoyo</span
        >
      </div>

      <h1 class="text-3xl font-bold text-slate-900">
        SalusMeet
        <span class="text-teal-600">.</span>
        Comunidad de Apoyo
      </h1>

      <p class="mt-3 text-slate-600 max-w-2xl">
        Conecta con personas que viven situaciones de salud similares a las
        tuyas. Comparte tus experiencias, encuentra apoyo y descubre recursos
        útiles para tu bienestar. En SalusMeet, no estás solo en tu viaje hacia
        la salud. Únete a nuestra comunidad y encuentra el apoyo que necesitas.
      </p>

      <div class="mt-6 flex gap-3">
        <RouterLink
          to="/register"
          class="px-5 py-2.5 rounded-xl bg-teal-600 text-white font medium border hover:bg-teal-700 transition">
          Únete Ahora
        </RouterLink>

        <button
          class="px-5 py-2.5 rounded-xl bg-white text-slate-900 font medium border hover:bg-slate-50 transition">
          Saber más
        </button>
      </div>
    </section>
  </PublicLayout>
</template>
