<script setup>
import Project from "./project.vue";
import skills from "./skills.vue";
import Waifu from "./waifu.vue";
</script>

<template>
  <section
    class="pt-12 pb-16 w-full bg-light dark:bg-dark transition-colors dark:text-white"
  >
    <div class="container mx-auto">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4
            class="font-semibold text-lg text-primary mb-2 dark:text-blue-400"
          >
            More About Me
          </h4>
          <h2
            class="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white"
          >
            Are you curious?
          </h2>
        </div>
      </div>
      <div
        class="min-h-screen bg-gray-100 p-6 dark:bg-slate-600 dark:bg-opacity-90"
      >
        <div class="flex space-x-4 mb-4">
          <div class="hidden md:flex space-x-4">
            <button
              v-for="menu in menus"
              :key="menu"
              @click="activeMenu = menu"
              :class="[
                'px-4 py-2 rounded transition-all',
                menu === activeMenu
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-800',
              ]"
            >
              {{ menu }}
            </button>
          </div>

          <div class="md:hidden w-full">
            <select
              v-model="activeMenu"
              class="w-full p-2 rounded bg-gray-300 text-gray-800"
            >
              <option v-for="menu in menus" :key="menu" :value="menu">
                {{ menu }}
              </option>
            </select>
          </div>
        </div>

        <div class="bg-white p-6 rounded shadow-md text-black dark:bg-light transition-colors">
          <div v-if="activeMenu === 'Project'">
            <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
              Project
            </h2>
            <p class="md:text-lg">Some of my own project.</p>
            <div class="pt-8 w-full">
              <Project />
            </div>
          </div>
          <div v-if="activeMenu === 'Certificate'">
            <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
              Certificate
            </h2>
            <p class="md:text-lg">Its nothing.</p>
          </div>
          <div v-if="activeMenu === 'Lovable'">
            <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
              Lovable
            </h2>
            <p class="md:text-lg">They're too perfect for being real</p>
            <Waifu />
          </div>
          <div v-if="activeMenu === 'Skills'">
            <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">Skills</h2>
            <p class="md:text-lg">Nah man, I'm still learning.</p>
            <skills />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: "Project", // Menu yang aktif saat awal
      menus: ["Project", "Certificate", "Lovable", "Skills"], // Daftar menu
    };
  },
};
</script>
