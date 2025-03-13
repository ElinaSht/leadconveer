<script setup lang="ts">
const clients = [
  {
    name: 'Skoda',
    logo: new URL('../assets/block-clients/skoda.svg', import.meta.url).href
  },
  {
    name: 'Skillbox',
    logo: new URL('../assets/block-clients/skillbox.svg', import.meta.url).href
  },
  {
    name: 'Worldclass',
    logo: new URL('../assets/block-clients/worldclass.svg', import.meta.url).href
  },
  {
      name: 'Absolute-bank',
      logo: new URL('../assets/block-clients/absolute-bank.svg', import.meta.url).href
    },
]
</script>

<template>
  <div class="flex flex-col items-center w-[1820px] px-[20px] mx-auto">
    <div class="text-h2 text-center">
      Клиенты, которые уже покупают<br /><span class="text-h2 text-orange-juice">Лидов для своего бизнеса</span>
    </div>

    <div class="text-h3 text-center text-grey mt-[20px] mb-[40px]">
      Более 5000 компаний по всей России<br />уже используют покупку Лидов!
    </div>

    <div class="flex justify-between w-full">
      <div v-for="client in clients" :key="client.name" class="flex items-center justify-center w-[430px] h-[200px] rounded-[30px] bg-light-gray">
        <img :src="client.logo" :alt="client.name" />
      </div>
    </div>
  </div>
</template>
