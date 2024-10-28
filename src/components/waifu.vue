<template>
  <div class="bg-gray-100 p-2 dark:bg-slate-700 dark:text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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

      <div class="text-center md:text-left">
        <h2 class="text-2xl font-semibold mb-4">{{ activeWaifu.name }}</h2>
        <p class="text-gray-700 dark:text-gray-100">{{ activeWaifu.description }}</p>
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
            "Ninym has loyal personality and cute appearance, I like her because of it. Also i love white hair!",

          image:
            "https://i.pinimg.com/736x/82/ee/91/82ee914276b9037d473cdc1e50ebae09.jpg",
        },
        {
          name: "Nao Tomori",
          description:
            "Maybe just some people know her, but she is special for me",
          image:
            "https://i.pinimg.com/originals/d3/7f/5d/d37f5d0b84a168aa9372eb8e2a8ce843.jpg",
        },
        {
          name: "Hori Kyouko",
          description:
            "Gets jealous easily? but she is good girl, funny and smart right? We have same personality",
          image:
            "https://i.pinimg.com/736x/09/53/4e/09534ef55cabba049998731cdbfef336.jpg",
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

<style scoped>
circle {
  transition: stroke-dashoffset 0.5s ease;
}
</style>
