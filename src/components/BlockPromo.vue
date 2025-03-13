<script setup lang="ts">
import IconStarGradient from '../assets/icons/star-gradient.svg'
</script>

<template>
  <div class="flex gap-[60px] items-start justify-center w-[1820px] px-[20px] mx-auto">
    <div class="relative">
      <IconStarGradient class="absolute size-[72px] top-[11px] -left-[81px] -rotate-[30deg]"/>
      <img src="../assets/block-promo/promo.webp" alt="promo" />
      <IconStarGradient class="absolute size-[57px] -bottom-[62px] right-[26px]"/>
    </div>

    <div class="flex flex-col gap-[40px] max-w-[730px]">
      <div class="flex gap-[20px]">
        <div class="text-h2">Технология<br><span class="text-h2 text-orange-juice">«Лид Конвейер»</span></div>
        <img src="../assets/icons/smiling-face.svg" alt="smile" class="self-end"/>
      </div>

      <div class="flex flex-col gap-[20px]">
        <span>Мы разработали программный комплекс, который позволяет определять контактные данные (телефон, Telegram, email) тех посетителей вашего сайта, кто был на сайте, но не оставил заявку.</span>
        <span>Далее, на основе собственных разработок, мы идентифицируем пользователей по интересам и интересующим их товарам и услугам — вам передаём только тех, кто заинтересован в вашей услуге или товаре.</span>
        <span>Вы платите только за результат — за полученных Лидов (заявки) на свои услуги или товары.</span>
      </div>
    </div>
  </div>
</template>
