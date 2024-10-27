<script setup>
import { ref } from "vue";
import menuSelector from "./menuSelector.vue";

const showMore = ref(false);
const showMenu = ref(null);
</script>
<template>
  <section class="pt-36 pb-24 bg-light dark:bg-dark transition-colors dark:text-white" id="about">
    <div class="container mx-auto">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2 dark:text-blue-400">About Me</h4>
          <h2
            class="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white"
          >
            Who am I?
          </h2>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div
          class="w-full self-center px-6 py-8 lg:w-1/2 bg-primary text-white"
        >
          <p class="text-base font-medium text-slate-300 text-justify mb-6">
            <span class="text-white text-lg"
              >Hello I'm 
              <span
                class="text-white text-lg font-semibold block lg:inline-block"
                >Bintang Maulana Murtifandy,</span
              ></span
            >
            you can call me "Tang" or "Fund". I'm from Bantul, but I stayed in
            the Kota Yogyakarta. Right now I'm a grade 10 student who attends
            <a
              href="https://smkn2depoksleman.sch.id/utama/"
              class="text-secondary"
              >SMK N2 Depok Sleman</a
            >. I'm interested in programming, focussing on web development.
            Beyond that, I'm also interested in photography and computer
            networking.
          </p>
          <div class="w-full max-w-md">
            <h2 class="text-lg font-semibold mb-4">Support me to buy Camera</h2>
            <div class="flex items-center">
              <img
                src="https://img.lazcdn.com/g/ff/kf/S9b950b43c5914e229a42b4e4dd83a8eca.jpg_720x720q80.jpg"
                width="50px"
                alt="Placeholder Image"
                class="mr-4 rounded-lg lg:w-[150px]"
              />
              <div class="w-full">
                <div class="relative pt-1">
                  <div class="flex items-center justify-between">
                    <span
                      class="text-xs hidden font-semibold py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mb-4 lg:inline-block"
                    >
                      Progress to Rp3.000.000,00
                    </span>
                    <span
                      class="text-xs font-semibold inline-block text-teal-600 md:text-xl lg:text-2xl"
                    ></span>
                  </div>
                  <div class="flex h-2 mx-4 mb-8 bg-gray-200 rounded">
                    <div
                      class="bg-teal-600 h-full rounded"
                      style="width: 0%"
                    ></div>
                  </div>
                  <a
                    href="https://saweria.co/bxie"
                    class="px-4 py-2 rounded-lg shadow-lg text-white bg-secondary"
                    >Contribute</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full self-center text-xl px-12 py-8 lg:w-1/2 md:text-2xl">
          <h4 class="font-bold mx-auto my-2">What can i do?</h4>
          <div class="flex mx-auto">
            <div class="grid grid-cols-3 gap-4 md:grid-cols-8 lg:grid-cols-5">
              <a href="https://id.wikipedia.org/wiki/HTML" target="_blank"
                ><div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                    alt="HTML Logo"
                    class="h-16 w-16"
                  /></div
              ></a>
              <a
                href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets"
                target="_blank"
                ><div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
                    alt="CSS Logo"
                    class="h-16 w-16"
                  /></div
              ></a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                ><div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="JavaScript Logo"
                    class="h-16 w-16"
                  /></div
              ></a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="/tailwind.png"
                    alt="Tailwind CSS Logo"
                    class="h-16 w-16"
                  />
                </div>
              </a>
              <a
                href="http://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
                ><div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="/bootstraps.png"
                    alt="Bootstrap Logo"
                    class="h-16 w-16"
                  /></div
              ></a>
              <a
                href="http://react.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img src="/react.png" alt="React Logo" class="h-16 w-16" />
                </div>
              </a>
              <a
                href="http://vuejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
                    alt="vue.js Logo"
                    class="h-16 w-16"
                  />
                </div>
              </a>
              <a
                href="http://vite.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743"
                    alt="Vite.js Logo"
                    class="h-16 w-16"
                  />
                </div>
              </a>
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                ><div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://nodejs.org/static/logos/jsIconGreen.svg"
                    alt="NodeJs Logo"
                    class="h-16 w-16"
                  /></div
              ></a>
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noopener noreferrer"
                ><div
                  class="transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png"
                    alt="Python Logo"
                    class="h-16 w-16"
                  /></div
              ></a>
            </div>
          </div>
          <div class="container mt-4">
            <h4 class="font-bold mx-auto">Connect with me</h4>
            <p class="font-medium text-slate-500 text-sm md:text-lg mb-4">
              I'll be happy to connect with you on social media. Here are my
              social media:
            </p>

            <div class="sosmed text-6xl gap-4">
              <a
                href="https://www.tiktok.com/@byntangxyz_?_t=8ovCHgxv4bY&_r=1"
                target="_blank"
              >
                <i class="ph ph-tiktok-logo"></i>
              </a>
              <a
                href="https://www.instagram.com/byntangxyz?igsh=MXk2NGp2MTlkMnAw"
                target="_blank"
              >
                <i class="ph ph-instagram-logo"></i>
              </a>
              <a href="https://github.com/byntangxyz" target="_blank">
                <i class="ph ph-github-logo"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div ref="showMenu" :class="{ hidden: !showMore }">
        <menuSelector />
      </div>
      <div class="m-auto content-center text-center pt-16">
        <button
          class="px-3 py-2 rounded-lg bg-primary text-white text-[16px] hover:opacity-70 hover:shadow-lg md:text-xl lg:text-2xl"
          @click="showMore = !showMore"
        >
          {{ showMore ? "Show less" : "More about me" }}
        </button>
      </div>
    </div>
  </section>
</template>
