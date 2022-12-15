<template>
  <div class="home p-12">
    <div class="text-3xl mb-4 font-bold text-center">Tramways à proximité</div>
    <div class="bg-blue-600 p-8 rounded-lg bg-opacity-50 flex flex-col">
      <div class="flex items-center justify-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        Leon Blum
      </div>
      <div class="flex">
        <div class="w-2/5 text-sm">
          <div class="">Mosson - 3min</div>
          <div class="">Mosson - 2min</div>
          <div class="">Mosson - 1min</div>
        </div>
        <div class="w-1/6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>
        <div class="w-2/5 text-sm text-right">
          <div class="">Odysseu - 3min</div>
          <div class="">Odysseu - 2min</div>
          <div class="">Odysseu - 1min</div>
        </div>
      </div>
    </div>
    <div class="bg-orange-600 p-8 rounded-lg bg-opacity-50 flex flex-col mt-12">
      <div class="flex items-center justify-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        Leon Blum
      </div>
      <div class="flex">
        <div class="w-2/5 text-sm">
          <div class="">Jacou - 5min</div>
          <div class="">Jacou - 2min</div>
          <div class="">Jacou - 1min</div>
        </div>
        <div class="w-1/6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>
        <div class="w-2/5 text-sm text-right">
          <div class="">Sabines - 3min</div>
          <div class="">Sabines - 2min</div>
          <div class="">Sabines - 1min</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
