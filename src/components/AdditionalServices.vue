<script setup lang="ts">
import IconStar from '../assets/icons/star.svg'

const cards = [
  {
    title: 'Создание промо-страницы',
    price: '15 000 ₽',
  },
  {
    title: 'Настройка и ведение Яндекс.Директ',
    price: '10 000 ₽',
  },
]

</script>

<template>
  <div class="flex flex-col gap-[40px] w-[1480px] mx-auto">
    <div class="text-h2 text-center">
      Дополнительные услуги
    </div>

    <div class="flex justify-between">
      <div v-for="card in cards" :key="card.title" class="w-[730px] bg-light-gray rounded-[40px] p-[40px]">
        <div class="flex justify-between">
          <div class="flex flex-col gap-[20px]">
            <div class="font-montserrat text-[36px] font-bold max-w-[430px] leading-[42px]">{{ card.title }}</div>
            <div class="flex gap-[12px] items-center">
              <span>от</span>
              <span class="font-montserrat text-[36px] font-bold gradient">{{ card.price }}</span>
            </div>
          </div>

          <IconStar />
        </div>

        <LCButton label="КУПИТЬ" class="mt-[30px]"/>
      </div>
    </div>
  </div>
</template>
