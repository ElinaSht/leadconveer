<script setup lang="ts">
const advantages = ['Лидогенерация в b2b', 'Биржа лидов', 'Сервис по Лидгену', 'Лиды для производства', 'Клиенты для бизнеса', 'Определить телефон посетителя сайта']
</script>

<template>
  <div class="flex flex-col w-[1780px] mx-auto px-[70px]">

    <div class="flex gap-[100px]">
      <div class="flex flex-col gap-[40px] w-[800px] my-[114px]">
        <div class="text-h1 flex flex-col">
          <span class="text-h1 text-orange-juice">Лидогенерация</span> для бизнеса
        </div>

        <div class="flex gap-[20px]">
          <span class="text-h3 max-w-[525px]">Покупайте только целевые лиды по фиксированной цене от 300 ₽</span>
          <img src="../assets/icons/money-mouth-face.svg" alt="icon"/>
        </div>

        <LCButton class="w-full" label="ВЫБРАТЬ ПАКЕТ ЛИДОВ"/>
      </div>

      <img src="../assets/block-intro/intro-image.svg" alt="intro" class="my-[60px]" />
    </div>

    <div class="flex gap-[20px] ">
      <div
        v-for="adv in advantages"
        :key="adv"
        class="w-[280px] h-[88px] bg-white text-[20px] text-grey text-center rounded-t-[30px] flex justify-center items-center">
        {{ adv }}
      </div>
    </div>
  </div>

</template>
