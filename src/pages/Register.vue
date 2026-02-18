<script setup lang="ts">
import PublicLayout from "../layouts/PublicLayaout.vue";
</script>

<template>
  <PublicLayout>
    <div class="mx-auto max-w-md">
      <div class="bg-white border rounded-2xl shadow-sm p-6 sm:p-8">
        <h1 class="text-2xl font-bold text-slate-900">Crear Cuenta</h1>
        <p class="mt-2 text-slate-600">Únete a la comunidad SalusMeet</p>

        <form class="mt-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Nombre</label
            >
            <input
              type="text"
              class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Tu Nombre" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Email</label
            >
            <input
              type="email"
              class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="tu@email.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Contraseña</label
            >
            <input
              type="password"
              class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="********" />
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-teal-600 text-white py-2 font-medium py-2.5 shadow-sm hover:bg-teal-700 transition">
            Crear Cuenta
          </button>
        </form>

        <p class="mt-6 text-sm text-slate-600">
          ¿Ya tienes una cuenta?
          <RouterLink
            to="/login"
            class="text-teal-700 hover:text-teal-800 font-medium">
            Inicia Sesión
          </RouterLink>
        </p>
      </div>
    </div>
  </PublicLayout>
</template>
