<script setup lang="ts">
import PublicLayout from "../layouts/PublicLayaout.vue";
</script>

<template>
  <PublicLayout>
    <section class="bg-white border rounded-2xl shadow-sm p-8">
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
        <button
          class="px-5 py-2.5 rounded-xl bg-teal-600 text-white font medium shadow-sm hover:bg-teal-700 transition">
          Únete
        </button>

        <button
          class="px-5 py-2.5 rounded-xl bg-white text-slate-900 font medium border hover:bg-slate-50 transition">
          Saber más
        </button>
      </div>
    </section>
  </PublicLayout>
</template>
