<script setup lang="ts">
import IconStar from '../assets/icons/star.svg'

const reasons = [
  'Только качественные Лиды. Мы идентифицируем только тех посетителей, которым интересна ваша услуги и из вашего города.',
  'Доступная цена и отсутствие минимального порога. У нас отсутствует минимальная плата за сервис, подписка и т.п. Вы покупаете столько Лидов — сколько хотите!',
  'Техническая поддержка и комплекс услуг. Мы работаем для вас 24/7!',
]

const additionalReasons = [
  {
    icon: new URL('../assets/block-why/high-voltage.svg', import.meta.url).href,
    text: '<span class="font-bold">Источник Лидов:</span><br>контекстная реклама в Яндекс.Директ, SEO, SMM и другая реклама дополняют технологию «Лид Конвейер».',
  },
  {
    icon: new URL('../assets/block-why/fire.svg', import.meta.url).href,
    text: '<span class="font-bold">Вы экономите на рекламе:</span><br>получая контактные данных тех, кто не оставил заявки, но заинтересован в Вашем товаре или услуге — это дополнительный канал продаж.',
  },
  {
    icon: new URL('../assets/block-why/glowing-star.svg', import.meta.url).href,
    text: '<span class="font-bold">Вы сможете прогнозировать продажи:</span><br>чтобы не ждать, когда-же кто‑то позвонит или оставит заявку, звоните и продавайте первым!',
  },
  {
    icon: new URL('../assets/block-why/hundred-points.svg', import.meta.url).href,
    text: '<span class="font-bold">Безопасно:</span><br>это абсолютно легальный и законный метод получения Лидов.',
  },
  {
    icon: new URL('../assets/block-why/woman-running.svg', import.meta.url).href,
    text: '<span class="font-bold">Быстро:</span><br>запуск и получение первых Лидов обычно занимает 5–7 дней, а добавление проекта в систему менее 1 часа.',
  },
]
</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div class="flex flex-col items-center">
      <div class="text-h2">Почему лучше <span class="text-h2 text-orange-juice">заказать Лидов у нас</span></div>

      <div class="text-h3 text-grey text-center mt-[20px] mb-[40px]">
        Лидогенерация — это стабильное получение клиентов<br />и выполнение плана по продажам!
      </div>

      <div class="flex gap-[20px] mb-[27px]">
        <div
          v-for="(reason, i) in reasons"
          :key="i"
          class="flex flex-col gap-[12px] bg-light-gray p-[40px] rounded-[40px] flex-1"
        >
          <div class="flex justify-between items-center">
            <span class="text-h1">0{{ i + 1 }}</span>
            <IconStar class="size-[60px]" />
          </div>
          <span>{{ reason }}</span>
        </div>
      </div>

      <div class="flex gap-[20px]">
        <div v-for="additionalReason in additionalReasons" :key="additionalReason.icon" class="flex flex-col gap-[20px] flex-1 bg-light-gray p-[30px] rounded-[40px]">
          <img :src="additionalReason.icon" alt="icon" class="size-[50px]"/>
          <div class="text-grey" v-html="additionalReason.text"/>

        </div>

      </div>
    </div>
  </div>
</template>
