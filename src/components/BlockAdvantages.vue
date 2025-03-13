<script setup lang="ts">
import IconStarGradient from '../assets/icons/star-gradient.svg'

const cards = [
  {
    header: 'Оплата за результат',
    text: 'Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)',
    image: new URL('../assets/block-advantages/result.svg', import.meta.url).href,
  },
  {
    header: 'Качественные лиды',
    text: 'Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу',
    image: new URL('../assets/block-advantages/lead.svg', import.meta.url).href,
  },
  {
    header: 'Любой объём - на ваш выбор',
    text: 'Покупайте сколько контактов потенциальных клиентов в месяц — сколько требуется вам!',
    image: new URL('../assets/block-advantages/volume.svg', import.meta.url).href,
  },
  {
    header: 'Комплекс технологий',
    text: 'После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявку',
    image: new URL('../assets/block-advantages/technologies.svg', import.meta.url).href,
  },
]
</script>

<template>
  <div class="flex flex-col gap-[40px] w-[1820px] px-[20px] mx-auto">
    <div class="text-h2 text-center">
      Завалим ваш отдел продаж<br><span class="text-h2 text-orange-juice">целевыми Лидами</span>
    </div>

    <div class="flex flex-wrap justify-between gap-[20px]">
      <div v-for="card in cards" :key="card.header" class="flex justify-between w-[880px] h-[349px] bg-light-gray rounded-[30px] sm:hover:bg-dark-gray/10 overflow-hidden transition cursor-pointer">
        <div class="flex flex-col gap-[20px] w-[466px] ml-[40px] mt-[60px]">
          <div class="flex gap-[30px]">
            <div class="text-h3">{{ card.header }}</div>
            <IconStarGradient class="self-start"/>
          </div>
          <div class="text-grey">{{ card.text }}</div>
        </div>

        <div>
          <img :src="card.image" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>
