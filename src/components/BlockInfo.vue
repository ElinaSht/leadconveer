<script setup lang="ts">
const text = [
  'Использование лидогенерации снижает стоимость привлечения клиентов, позволяет бизнесу сосредоточиться на основном продукте и значительно упрощает процесс работы.',
  'Стоимость заявок на нашей платформе зависит от их качества и сложности. Мы предоставляем прозрачные тарифы и выгодные условия сотрудничества.',
  'Наша биржа — это место встречи тех, кто заказывает заявки, и тех, кто их предоставляет. Мы создаём условия для успешного сотрудничества и взаимной выгоды.',
  'Биржа лидов — это современное решение для бизнеса, которое позволяет эффективно находить новых клиентов и масштабировать свою деятельность.',
  'Использование биржи помогает оптимизировать стоимость привлечения заявок и получить готовые решения для лидогенерации. Наш сервис предоставляет уникальную возможность купить или продать лиды, обеспечивая прозрачность и надёжность каждой сделки.',
  'Мы объединяем вебмастеров, готовых передать заявки, и бизнесы, которым нужны новые клиенты. На нашей платформе вебмастеры размещают готовые заявки, которые затем приобретаются бизнесами для привлечения новых клиентов. Это упрощает процесс взаимодействия и повышает эффективность работы. Каждая заявка проходит тщательную проверку, чтобы обеспечить максимальную ценность для бизнеса.',
  'Вы покупаете лиды, уже готовые к взаимодействию, и получаете гарантированный результат.',
]

const open = ref<boolean>(false)
const buttonText = computed(() => (open.value ? 'Скрыть' : 'Читать больше'))
const visibleText = computed(() => open.value ? text : text.slice(0,3))
</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div class="flex items-start justify-center gap-[60px]">
      <div class="flex flex-col">
        <div class="text-h2">
          <span class="text-h2 text-orange-juice">Лидогенерация —</span><br />это новая<br />эра маркетинга!
        </div>
        <img src="../assets/icons/rocket.svg" alt="icon" class="mt-[30px] mb-[60px] size-[72px]" />
        <LCButton label="КУПИТЬ ЛИДЫ" class="w-[690px]" />
      </div>

      <div class="flex flex-col gap-[30px]">
        <div class="flex flex-col gap-[20px]">
          <div v-for="sentence in visibleText" :key="sentence" class="max-w-[731px]">
            {{ sentence }}
          </div>
        </div>

        <div
          class="text-grey underline sm:hover:text-dark-gray sm:active:text-orange-juice disabled:text-grey2 cursor-pointer"
          @touchstart.passive="() => {}"
          @click="open = !open"
        >
          {{ buttonText }}
        </div>
      </div>


    </div>
  </div>
</template>
