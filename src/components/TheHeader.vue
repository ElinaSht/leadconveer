<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-between h-[82px] bg-dark-gray rounded-b-[40px] pl-[70px] pr-[30px]">
    <img src="../assets/header/logo.svg" alt="LEADCONVEER"/>

    <div class="flex gap-[60px]">
      <HeaderLink label="Как это работает"/>
      <HeaderLink label="Цена"/>
      <HeaderLink label="Отзывы"/>
      <HeaderLink label="Контакты"/>
    </div>

    <div class="flex items-center gap-[12px]">
      <img
        class="cursor-pointer active:scale-95 transition"
        src="../assets/icons/whatsapp.svg"
        alt="wa"
        @touchstart.passive="() => {}"
      />
      <img
        class="cursor-pointer active:scale-95 transition"
        src="../assets/icons/telegram.svg"
        alt="tg"
        @touchstart.passive="() => {}"
      />

      <HeaderLink label="+7 495 118-32-82" class="text-[32px]" />

    </div>

  </div>
</template>
