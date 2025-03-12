<script setup lang="ts">

import BlockAdvantages from '@/components/BlockAdvantages.vue'
import BlockPrices from '@/components/BlockPrices.vue'
import BlockReviews from '@/components/BlockReviews.vue'
</script>
<template>
  <div class="flex flex-col gap-[120px] mb-[200px]">

    <div class="flex flex-col bg-light-gray rounded-b-[40px]">
      <TheHeader />
      <BlockIntro />
    </div>

    <BlockAdvantages />
    <BlockPrices />
    <BlockClients />
    <BlockReviews />
  </div>
</template>
