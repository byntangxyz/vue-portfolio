<script setup>
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';

const isNavVisible = ref(false); // State untuk menampilkan menu
const hamburger = ref(null); // Ref untuk tombol hamburger
const navMenu = ref(null); // Ref untuk menu navigasi

function handleClickOutside(event) {
  if (
    hamburger.value &&
    navMenu.value &&
    !hamburger.value.contains(event.target) &&
    !navMenu.value.contains(event.target)
  ) {
    isNavVisible.value = false; // Sembunyikan menu
  }
}

// Pasang dan lepas event listener saat komponen aktif
onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>


<template>
  <header class="absolute top-0 left-0 w-full flex items-center z-10">
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a href="#home" class="font-bold text-3xl block py-6 px-4">
            byntang<span class="text-blue-950">xyz</span>
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
            class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
          >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  href="#home"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400"
                  >Home</a
                >
              </li>
              <li class="group">
                <a
                  href="#blog"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400"
                  >Blog</a
                >
              </li>
              <li class="group">
                <a
                  href="#about"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400"
                  >About</a
                >
              </li>
              <li class="group">
                <a
                  href="https://links.bxfundz.my.id"
                  target="_blank"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400"
                  >Links</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
