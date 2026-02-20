<script setup lang="ts">
import PublicLayout from "../layouts/PublicLayaout.vue";
import { reactive } from "vue";
import { isValidEmail } from "../utils/validators";

//estado del formulario
const form = reactive({
  name: "",
  email: "",
  password: "",
});

const errors = reactive({
  name: "",
  email: "",
  password: "",
});

const inputBaseClasses =
  "mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 transition";

//Helpers para mantener código limpio
function clearErrors() {
  errors.name = "";
  errors.email = "";
  errors.password = "";
}

function validate(): boolean {
  clearErrors();
  //nombre debe tener al menos 3 caracteres
  if (form.name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }
  //email usando función de testeo
  if (!isValidEmail(form.email)) {
    errors.email = "Por favor ingresa un email válido.";
  }
  //contraseña debe tener al menos 6 caracteres
  if (form.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }
  //si hay algún error, no es válido
  const hasErrors = Boolean(errors.name || errors.email || errors.password);
  return !hasErrors;
}
function handleSubmit() {
  if (!validate()) return;
  //aqui llamare a auth.service.register(form)
  console.log("Formulario válido, enviando datos", { ...form });
}
</script>

<template>
  <PublicLayout>
    <div class="mx-auto max-w-md">
      <div class="bg-white border rounded-2xl shadow-sm p-6 sm:p-8">
        <h1 class="text-2xl font-bold text-slate-900">Crear Cuenta</h1>
        <p class="mt-2 text-slate-600">Únete a la comunidad SalusMeet</p>

        <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Nombre</label
            >
            <input
              v-model="form.name"
              type="text"
              :class="[
                inputBaseClasses,
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-slate-300 focus:ring-teal-500',
              ]"
              placeholder="Tu Nombre" />
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">
              {{ errors.name }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              :class="[
                inputBaseClasses,
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-slate-300 focus:ring-teal-500',
              ]"
              class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="tu@email.com" />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Contraseña</label
            >
            <input
              v-model="form.password"
              type="password"
              :class="[
                inputBaseClasses,
                errors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-slate-300 focus:ring-teal-500',
              ]"
              placeholder="********" />
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </p>
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
