<script setup lang="ts">
const links = [
  'Блог',
  'Договор-оферта',
  'Политика конфиденциальности',
  'Соглашение об обработке данных',
  'Вход в личный кабинет',
]
</script>

<template>
  <div class="bg-dark-gray w-full h-[312px] rounded-t-[40px] py-[80px]">
    <div class="w-[1820px] px-[20px] flex flex-col mx-auto items-center">
      <div class="text-h3 text-white">© 2025 Все права защищены. Технология «Лид Конвейер» - лидогенерация для
        бизнеса.
      </div>
      <div class="text-white mt-[20px] mb-[40px]">ООО «ДС-ГРУПП» ИНН 7801355174 ОГРН 1187847129425</div>

      <div class="flex">
        <div v-for="(link, i) in links" :key="i" class="text-grey cursor-pointer ">
        <span
          class="ml-[5px] mr-[5px] transition sm:hover:text-white sm:active:text-orange-juice disabled:text-grey2"
          @touchstart.passive="() => {}"
        >
          {{ link }}
        </span>
          <span v-if="i != links.length - 1">|</span>
        </div>
      </div>
    </div>
  </div>
</template>
