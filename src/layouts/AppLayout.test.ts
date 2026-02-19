import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "./AppLayout.vue";

// el layout usa <RouterLink>, así que necesita un router para montar bien.
function makeRouter() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: { template: "<div />" } },
      { path: "/app", component: { template: "<div />" } },
    ],
  });
}

describe("AppLayout", () => {
  it("renders the logo image and brand", async () => {
    const router = makeRouter();

    const wrapper = mount(AppLayout, {
      global: {
        plugins: [router],
      },
      slots: {
        default: "<div>Contenido</div>",
      },
    });

    // Router en tests a veces requiere esperar a que esté listo.
    await router.push("/app");
    await router.isReady?.();

    const img = wrapper.get('img[alt="SalusMeet"]');
    expect(img).toBeDefined();

    expect(wrapper.text()).toContain("SalusMeet");
    expect(wrapper.text()).toContain("Contenido");
  });
});
