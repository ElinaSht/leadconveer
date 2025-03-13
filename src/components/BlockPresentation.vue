<script setup lang="ts">
import IconPlay from '../assets/icons/play.svg'
</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div class="flex flex-col gap-[40px] w-full items-center">
      <div class="flex gap-[20px]">
        <div class="text-h2 text-center">Мы подготовили для вас<br>видео-презентацию <span class="text-h2 text-orange-juice">нашей работы</span>
        </div>
        <img src="../assets/icons/video-camera.svg" alt="icon" class="self-end" />
      </div>

      <div class="flex items-center justify-center w-[1180px] h-[540px] rounded-[40px] bg-dark-gray">
        <IconPlay class="size-[70px] cursor-pointer"/>
      </div>
    </div>

  </div>
</template>
