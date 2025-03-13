<script setup lang="ts">
import IconStarGradient from '../assets/icons/star-gradient.svg'
import IconPlay from '../assets/icons/play.svg'

const reviews = [
  {
    estimate: '5,0',
    text: '«Стабильно получаем новые лиды из сервиса. С точки зрения рентабельности нареканий нет. Тёплая заявка 800–1000 рублей, конверсия, цена-качество устраивает. Общее впечатление достаточно хорошее, цена, качество, скорость».',
    area: 'Ниша: банкротство, списание долгов',
  },
  {
    estimate: '4,8',
    text: '«С вашим сервисом работаем с июня 22 года. Нас заинтересовало, и мы решили протестировать. Взяли минимальный пакет из 10 новых лидов, а потом, как он закончился, взяли повышенный пакет. Учитывая нашу сферу и посмотреть статистику, из 100 заинтересованных 15 в продажу. Это хороший результат».',
    area: 'Ниша: банкротство, списание долгов',
  },
  {
    estimate: '5,0',
    text: '«С сервисом работаем чуть меньше года. Немного сомневались, но согласились попробовать, а после продолжили работать. Новые клиенты появились сразу, передали на наш колл-центр. С вашего источника дешевле, чем с других сервисов. Безусловно, с вами стоит работать».',
    area: 'Ниша: банкротство, списание долгов',
  },
  {
    estimate: '4,9',
    text: '«С вашей компанией работаем более 2‑х лет, сотрудничество полезное. Мы все посмотрели, разобрались, что сервис даёт реально целевые заявки. Заключили контракт на 23 000 рублей, окупилось. Понравилась технология, она помогает нам получать лиды».',
    area: 'Ниша: банкротство, списание долгов',
  },

]
</script>

<template>
  <div class="flex flex-col items-center w-[1820px] px-[20px] mx-auto">
    <div class="text-h2 text-center">
      Отзывы клиентов
    </div>

    <div class="text-h3 text-center text-grey mt-[20px] mb-[38px]">
      Более 89% наших клиентов сотрудничают с нами<br>ежемесячно на протяжении более 2-х лет
    </div>

    <div class="flex justify-between w-full">
      <div v-for="review in reviews" :key="review.text" class="flex flex-col gap-[20px] w-[430px] rounded-[30px] bg-light-gray p-[40px]">
        <div class="flex gap-[26px] items-center">
          <span>{{ review.estimate }}</span>
          <div class="flex gap-[6px]">
            <IconStarGradient v-for="i in 5" :key="i" class="-rotate-[15deg]"/>
          </div>
        </div>

        <div class="flex flex-col gap-[20px]">
          <span>{{ review.text }}</span>
          <span class="text-grey max-w-[316px]">{{ review.area }}</span>
        </div>

      </div>
    </div>

    <div class="flex justify-between w-full mt-[40px]">
      <div v-for="i in 3" :key="i" class="flex flex-col gap-[12px]">
        <div class="flex items-center justify-center bg-dark-gray w-[580px] h-[320px] rounded-[40px]">
          <IconPlay />
        </div>
        <div>Отзыв {{ i }}: название</div>
      </div>
    </div>
  </div>

</template>
