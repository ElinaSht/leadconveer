<script setup lang="ts">
import IconOpen from '../assets/block-faq/open.svg'
import IconClose from '../assets/block-faq/close.svg'
import { useElementHover } from '@vueuse/core'

const faqs = [
  {
    question: 'На сколько это безопасно, законно и может ли навредить моему сайту?',
    answer: [
      'Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.',
      'Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта. Таким образом, это гарантирует полную легальность работы с данными.',
      'Для сайта это не может навредить, и санкций со стороны поисковых системы (Яндекс, Google) нет.',
    ],
  },
  {
    question: 'Откуда берутся номера телефонов?',
    answer: [],
  },
  {
    question: 'Смогу ли я сам установить код на сайт?',
    answer: [],
  },
  {
    question: 'На какую CMS или конструктор можно установить код «Лид Конвейер»?',
    answer: [],
  },
  {
    question: 'Как оплатить ваш сервис?',
    answer: [],
  },
]

const opened = ref(Object.fromEntries(faqs.map(({ question }) => [question, false])))
const hovered = ref(Object.fromEntries(faqs.map(({ question }) => [question, false])))
</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div class="flex flex-col items-center gap-[40px]">
      <div class="text-h2">Вопросы и ответы</div>

      <div class="flex items-start gap-[25px]">
        <div class="flex flex-col gap-[20px]">
          <div
            v-for="faq in faqs"
            ref="faqRef"
            :key="faq.question"
            class="relative flex flex-col gap-[20px]"
          >
            <div
              class="flex items-center bg-light-gray w-[876px] h-[126px] py-[40px] pl-[40px] pr-[44px] cursor-pointer
                    rounded-[30px] border-[3px] border-light-gray sm:hover:border-orange-juice transition"
              :class="opened[faq.question] && 'border-grey'"
              @click="opened[faq.question] = !opened[faq.question]"
              @mouseenter="hovered[faq.question] = true"
              @mouseleave="hovered[faq.question] = false"
            >
              <div class="max-w-[690px]">{{ faq.question }}</div>

              <div class="ml-auto">
                <IconOpen
                  v-if="!opened[faq.question]"
                  class="transition"
                  :class="hovered[faq.question] && 'text-orange-juice'"
                />
                <IconClose
                  v-else
                  class="transition"
                  :class="hovered[faq.question] && 'text-orange-juice'"
                />
              </div>
            </div>

            <Transition enter-from-class="opacity-0" enter-active-class="transition-[opacity] duration-500 ease-out">
              <div v-if="opened[faq.question]" class="bg-light-gray w-[880px] h-[400px] rounded-[40px] p-[40px] flex flex-col gap-[20px]">
                <div v-for="item in faq.answer" :key="item">
                  {{ item }}
                </div>
              </div>
            </Transition>

          </div>
        </div>

        <img src="../assets/block-faq/faq.webp" alt="faq"/>

      </div>

    </div>
  </div>

</template>
