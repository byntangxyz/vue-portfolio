<script setup>
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";

const isNavVisible = ref(false);
const hamburger = ref(null);
const navMenu = ref(null);
const isDarkMode = ref(false);

function handleClickOutside(event) {
  if (
    hamburger.value &&
    navMenu.value &&
    !hamburger.value.contains(event.target) &&
    !navMenu.value.contains(event.target)
  ) {
    isNavVisible.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
});

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("darkMode", isDarkMode.value); // Simpan ke Local Storage

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

onMounted(() => {
  const savedMode = localStorage.getItem("darkMode") === "true";
  isDarkMode.value = savedMode;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <header class="absolute top-0 left-0 w-full flex items-center z-10 transition-colors">
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a href="#home" class="font-bold text-3xl block py-6 px-4 text-primary dark:text-blue-400">
            byntangxyz
          </a>
        </div>

        <div class="flex items-center px-4 lg:px-1">
          <button
            ref="hamburger"
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden"
            @click="isNavVisible = !isNavVisible"
            :class="{ 'hamburger-active': isNavVisible }"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
            ></span>
          </button>
          <nav
            ref="navMenu"
            id="nav-menu"
            :class="{ hidden: !isNavVisible }"
            class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent text-center"
           >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  href="#home"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Home</a
                >
              </li>
              <li class="group">
                <a
                  href="#blog"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Blog</a
                >
              </li>
              <li class="group">
                <a
                  href="#about"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >About</a
                >
              </li>
              <li class="group">
                <a
                  href="https://links.bxfundz.my.id"
                  target="_blank"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Links</a
                >
              </li>
              <li class="group">
                <button
                  @click="toggleDarkMode"
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
