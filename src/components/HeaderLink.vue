<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div
    class="cursor-pointer transition text-white sm:hover:text-grey2 max-sm:active:text-orange-juice sm:active:text-orange-juice disabled:text-disabled"
    @touchstart.passive="() => {}"
  >
    {{ props.label }}
  </div>
</template>
