<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div
    class="flex items-center justify-center text-white p-[20px] rounded-[20px] cursor-pointer active:scale-95 transition
          bg-orange-juice sm:hover:bg-orange-juice-light max-sm:active:bg-orange-juice-dark sm:active:bg-orange-juice-dark disabled:bg-grey2"
    @touchstart.passive="() => {}"
  >
    {{ props.label }}
  </div>

</template>
