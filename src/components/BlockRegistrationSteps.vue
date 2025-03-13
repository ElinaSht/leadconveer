<script setup lang="ts">

const steps = [
  {
    title: 'Регистрация и добавление проекта в систему',
    icon: new URL('../assets/block-registration-steps/man-technologist.svg', import.meta.url).href,
    text: [
      'Зарегистрируйтесь в нашем личном кабинете',
      'При добавление проекта вам необходимо указать URL (адрес) своего сайта',
      'Для вашего сайта будет сгенерирован уникальный код, который необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>).'
    ]
  },
  {
    title: 'Выбор пакета и количества Лидов',
    icon: new URL('../assets/block-registration-steps/check-mark-button.svg', import.meta.url).href,
    text: ['После добавления проекта в систему, вам необходимо выбрать тот пакет и количество Лидов, которое вам необходимо.']
  },
  {
    title: 'Оплата проекта',
    icon: new URL('../assets/block-registration-steps/money-with-wings.svg', import.meta.url).href,
    text: ['Оплатить Лидов вы сможете пластиковой картой или безналичным переводом.']
  },
  {
    title: 'Получение кода для сайта',
    icon: new URL('../assets/block-registration-steps/locked.svg', import.meta.url).href,
    text: ['После оплаты, система для вас сгенерирует код, который вам необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>).']
  },
  {
    title: 'Начало получения Лидов',
    icon: new URL('../assets/block-registration-steps/star-struck.svg', import.meta.url).href,
    text: ['В зависимости от вашей тематики (услуги или товара), а также объёма вашего трафика сайта система будет добавлять в личном кабинете контакты потенциальных клиентов, заинтересованных в вашей услуги и из вашего региона.']
  },
]

const index = ref<number>(0)
</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div class="flex flex-col items-center gap-[60px] w-full h-[628px] bg-light-gray rounded-[40px] py-[80px] px-[150px]">
      <div class="text-h2">Как это работает?</div>

        <div :key="index" class="flex gap-[90px] w-full bg-light-gray">
          <div class="flex flex-col gap-[30px] flex-1 max-w-[660px]">
            <div class="flex gap-[40px]">
              <span class="text-h1">0{{ index + 1 }}</span>
              <img :src="steps[index].icon" alt="icon" />
            </div>

            <div class="text-h2">{{ steps[index].title }}</div>
          </div>

          <div class="flex flex-col gap-[20px] flex-1">
            <div v-for="(sentence, i) in steps[index].text" :key="i">
              <div class="flex gap-[8px]">
                <div v-if="steps[index].text.length > 1">{{ i + 1 }}.</div>
                <div>{{ sentence }}</div>
              </div>
            </div>
          </div>
        </div>

      <div class="flex gap-[16px] mt-auto">
        <div
          v-for="(_, i) in steps.length"
          :key="i"
          class="size-[30px] rounded-full sm:hover:bg-grey2 sm:active:bg-orange-juice disabled:bg-grey transition cursor-pointer"
          :class="i === index ? 'bg-orange-juice' : 'bg-slider-default'"
          @touchstart.passive="() => {}"
          @click="index = i"
        />
      </div>
    </div>
  </div>

</template>
