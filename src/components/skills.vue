<template>
  <div class="bg-gray-100 p-6">
    <h1 class="text-3xl font-bold text-center mb-8">My Skills</h1>

    <!-- Grid untuk Circular Progress Bar -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="flex flex-col items-center"
      >
        <!-- Circular Progress Bar -->
        <div class="relative w-32 h-32">
          <svg class="w-full h-full">
            <!-- Background Circle -->
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              class="text-gray-300"
              stroke-width="8"
              stroke="currentColor"
              fill="none"
            />
            <!-- Progress Circle -->
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              class="text-blue-500"
              stroke-width="8"
              stroke-linecap="round"
              stroke="currentColor"
              fill="none"
              stroke-dasharray="282.6"
              :stroke-dashoffset="282.6 - (282.6 * skill.percentage) / 100"
            />
          </svg>
          <!-- Persentase di Tengah Lingkaran -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-xl font-bold">{{ skill.percentage }}%</span>
          </div>
        </div>

        <!-- Nama Skill -->
        <p class="mt-4 text-lg font-medium text-center">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Frontend Dev", percentage: 90 },
        { name: "Photography", percentage: 70 },
        { name: "Network Eng", percentage: 50 },
        { name: "Gaming", percentage: 50 },
      ],
    };
  },
};
</script>

<style scoped>
/* Tambahan CSS untuk animasi opsional */
circle {
  transition: stroke-dashoffset 0.5s ease;
}
</style>
