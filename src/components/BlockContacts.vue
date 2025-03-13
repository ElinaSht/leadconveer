<script setup lang="ts">
import IconTelegram from '../assets/icons/telegram.svg'

</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div class="bg-light-gray rounded-[60px] flex justify-between">
      <div class="flex flex-col flex-1">
        <div class="self-center text-h2 mt-[80px] mb-[20px]">Контакты</div>
        <div class="text-center text-grey text-h3">Есть вопрос, или вы хотите получить<br>бесплатную консультацию? Свяжитесь с нами,<br>и мы предоставим необходимую информацию!</div>

        <div class="flex flex-col gap-[30px] mt-[60px] ml-[80px]">
          <div class="flex flex-col gap-[6px] text-h3">
            <div class="text-grey ">Адрес офиса</div>
            <div
              class="sm:hover:text-grey sm:active:text-orange-juice disabled:text-grey2 cursor-pointer transition"
              @touchstart.passive="() => {}"
            >г. Москва, ул. Дубининская, д. 53</div>
          </div>

          <div class="flex flex-col gap-[6px] text-h3">
            <div class="text-grey ">Телефон</div>
            <div
              class="sm:hover:text-grey sm:active:text-orange-juice disabled:text-grey2 cursor-pointer transition"
              @touchstart.passive="() => {}"
            >
              +7 495 118-32-82
            </div>
          </div>

          <div class="flex flex-col gap-[6px] text-h3">
            <div class="text-grey ">Электронная почта</div>
            <div
              class="sm:hover:text-grey sm:active:text-orange-juice disabled:text-grey2 cursor-pointer transition"
              @touchstart.passive="() => {}"
            >
              mailbox@leadconveer.ru
            </div>
          </div>

          <div class="flex text-h3 gap-[12px] text-grey items-center">
            <span>Или напишите нам в любимом<br>мессенджере:</span>
            <IconTelegram class="size-[64px] cursor-pointer active:scale-95 transition"/>
          </div>
        </div>
      </div>

      <div class="rounded-[60px] overflow-hidden flex-1">
        <img src="../assets/block-contacts/contacts.webp" alt="contacts" />
      </div>

    </div>
  </div>

</template>
