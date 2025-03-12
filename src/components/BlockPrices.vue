<script setup lang="ts">
import IconCheck from '../assets/icons/check.svg'
import IconStar from '../assets/icons/star.svg'

const cards = [
  {
    label: 'Старт',
    amount: '50',
    price: '22 500 ₽',
    text: 'Стартовый пакет для тех, кто хочет купить Лидов со своего сайта и повысить свои продаж',
    options: ['50 Лидов', '450 ₽ за один Лид', 'Получение за 5–7 дней'],
    image: new URL('../assets/icons/star-dark.svg', import.meta.url).href,
    dark: false,
  },
  {
    label: 'Стандарт',
    amount: '100',
    price: '40 000 ₽',
    text: 'Оптимальный пакет Лидов для любого отдела продаж и для повышения продаж своих товаров или услуг',
    options: ['100 Лидов', '400 ₽ за один Лид', 'Получение за 7-14 дней', 'Возможность показа Лидам рекламы через Яндекс.Директ'],
    image: new URL('../assets/icons/star.svg', import.meta.url).href,
    dark: true,
  },
  {
    label: 'Премиум',
    amount: '300',
    price: '40 000 ₽',
    text: 'Максимум целевых Лидов в ближайшее время для вашего бизнеса которые уже завтра могут стать Вашими клиентами!',
    options: ['300 Лидов', '300 ₽ за один Лид', 'Получение за 14-30 дней', 'Возможность показа Лидам рекламы через Яндекс.Директ', 'Готовый и конверсионный скрипт продаж целевым Лидам'],
    image: new URL('../assets/icons/star-dark.svg', import.meta.url).href,
    dark: false,
  },
]
</script>

<template>
  <div class="flex flex-col items-center w-[1780px] mx-auto">
    <div class="text-h2 text-center">
      Стоимость технологий<br><span class="text-h2 text-orange-juice">«Лид Конвейер»</span>
    </div>

    <div class="text-h3 text-grey max-w-[1086px] text-center mt-[20px] mb-[60px]">
      Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего сайта, без переплаты и абонентской платы
    </div>

    <div class="flex justify-between w-full">
      <div
        v-for="card in cards"
        :key="card.amount"
        class="flex flex-col w-[580px] h-[813px] p-[40px] rounded-[30px]"
        :class="card.dark ? 'bg-dark-gray' : 'bg-light-gray'"
      >
        <div class="flex gap-[20px]">
          <div
            class="relative border text-h3 py-[10px] px-[20px] border-dark-gray rounded-[20px] size-fit"
            :class="card.dark && 'text-white border-white'"
          >
            {{ card.label }}
          </div>


          <IconStar :class="card.dark && 'text-white'"/>
        </div>

        <div
          class="font-montserrat font-bold text-[36px] leading-[42px] mt-[30px] mb-[20px]"
          :class="card.dark && 'text-white'"
        >
          {{ card.amount }} готовых лидов<br>за
          <span class="gradient font-montserrat font-bold text-[36px] leading-[42px]">
            {{ card.price }}
          </span>
        </div>

        <div class="flex flex-col gap-[30px] max-w-[424px]">
          <div class="text-grey leading-tight">{{ card.text }}</div>

          <div class="flex flex-col gap-[20px]" >
            <div
              v-for="(option, index) in card.options"
              :key="index"
              class="flex items-center gap-[12px]"
              :class="card.dark && 'text-white'"
            >
              <IconCheck class="shrink-0" :class="card.dark && 'text-white'" />
              <span class="leading-tight" :class="[card.dark && 'text-white', index === 1 && 'font-bold']">{{ option }}</span>
            </div>
          </div>
        </div>

        <LCButton label="КУПИТЬ" class="mt-auto"/>
      </div>
    </div>

    <AdditionalServices class="mt-[110px]"/>
  </div>
</template>
