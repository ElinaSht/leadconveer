<script setup lang="ts">
import IconStarGradient from '../assets/icons/star-gradient.svg'

const props = defineProps<{
  reversed?: boolean,
}>()

const content = [
  {
    text: 'Зарегестрируйтесь и добавьте свой проект в систему — начните получать Лидов сегодня!',
    image: new URL('../assets/block-registration/registration.webp', import.meta.url).href,
  },
  {
    text: 'Давайте принесём результат Вашему бизнесу? Завалите своей отдел продаж Лидами!',
    image: new URL('../assets/block-registration/registration-reverse.webp', import.meta.url).href,
  },
]

const resultContent = computed(() => props.reversed ? content[1] : content[0])
</script>

<template>
  <div class="w-[1820px] px-[20px] mx-auto">
    <div
      class=" flex items-center justify-center gap-[97px] w-full rounded-[40px] bg-dark-gray px-[120px] py-[60px]"
      :class="props.reversed && 'flex-row-reverse gap-[43px]'"
    >
      <div class="flex flex-col gap-[40px] max-w-[760px]">
        <span class="text-h2 text-white">{{ resultContent.text }}</span>
        <LCButton label="ЗАРЕГЕСТРИРОВАТЬСЯ" />
      </div>

      <div class="relative">
        <img :src="resultContent.image" alt="registration" />
        <IconStarGradient
          v-if="props.reversed"
          class="absolute top-[8px] left-[6px] size-[70px] -rotate-[15deg]"
        />
        <IconStarGradient
          v-if="props.reversed"
          class="absolute bottom-[33px] right-[50px] size-[68px] -rotate-[30deg]"
        />

        <IconStarGradient
          v-else
          class="absolute size-[88px] bottom-[5px] left-[24px] -rotate-[30deg]" />
      </div>

    </div>
  </div>

</template>
