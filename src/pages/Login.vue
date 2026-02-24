<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import PublicLayout from "../layouts/PublicLayaout.vue";
import { authService } from "../services/auth.service";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  general: "",
});

const inputBaseClasses =
  "mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 transition";

function handleSubmit() {
  errors.general = "";

  const res = authService.login(form.email, form.password);

  if (!res.ok) {
    errors.general = res.error || "Credenciales incorrectas";
    return;
  }

  router.push("/app");
}
</script>

<template>
  <PublicLayout>
    <div class="mx-auto max-w-md">
      <div class="bg-white border rounded-2xl shadow-sm p-6 sm:p-8">
        <h1 class="text-2xl font-bold text-slate-900">Iniciar Sesión</h1>
        <p class="mt-2 text-slate-600">Accede a tu cuenta de SalusMeet</p>

        <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              :class="[
                inputBaseClasses,
                'border-slate -300 focus:ring-teal-500',
              ]"
              ,
              placeholder="tu@email.com" />
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
                'border-slate-300 focus:ring-teal-500',
              ]"
              placeholder="********" />
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-teal-600 text-white py-2 font-medium shadow-sm hover:bg-teal-700 transition">
            Entrar
          </button>
          <p v-if="errors.general" class="text-sm text-red-600">
            {{ errors.general }}
          </p>
        </form>

        <p class="mt-6 text-sm text-slate-600">
          ¿No tienes una cuenta?
          <RouterLink
            to="/register"
            class="text-teal-700 hover:text-teal-800 font-medium">
            Regístrate
          </RouterLink>
        </p>
      </div>
    </div>
  </PublicLayout>
</template>
