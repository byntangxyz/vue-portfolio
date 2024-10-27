<template>
  <div class="bg-gray-100 p-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Slider Karakter -->
      <div class="w-full">
        <Swiper
          :slides-per-view="1"
          @slideChange="updateActiveCharacter"
          class="h-64 md:h-96"
        >
          <SwiperSlide v-for="(waifu, index) in waifus" :key="index">
            <img
              :src="waifu.image"
              :alt="waifu.name"
              class="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Deskripsi Karakter -->
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-semibold mb-4">{{ activeWaifu.name }}</h2>
        <p class="text-gray-700">{{ activeWaifu.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"; // Import komponen Swiper
import "swiper/swiper-bundle.css"; // Import stylesheet Swiper

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      activeIndex: 0, // Menyimpan index aktif
      waifus: [
        {
          name: "Alya Mikhailovna Kujou",
          description:
            "She was a heroine in anime series Roshidere, I'd like her because of her personality and beauty:3",
          image: "https://byntangxyz.github.io/alya-roshidere/foto_1.jpg",
        },
        {
          name: "Ninym Ralei",
          description:
            "Ninym has loyal personality and cute appearance, I like her because of it",

          image:
            "https://i.pinimg.com/736x/82/ee/91/82ee914276b9037d473cdc1e50ebae09.jpg",
        },
        {
          name: "Nao Tomori",
          description:
            "Mybe just some people know her, but she is special for me",
          image: "https://i.pinimg.com/originals/d3/7f/5d/d37f5d0b84a168aa9372eb8e2a8ce843.jpg",
        },
      ],
    };
  },
  computed: {
    activeWaifu() {
      return this.waifus[this.activeIndex];
    },
  },
  methods: {
    updateActiveCharacter(swiper) {
      this.activeIndex = swiper.activeIndex;
    },
  },
};
</script>

<style>
/* Tambahan CSS untuk transisi yang mulus */
circle {
  transition: stroke-dashoffset 0.5s ease;
}
</style>
