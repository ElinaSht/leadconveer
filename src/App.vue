<script setup lang="ts">

import BlockAdvantages from '@/components/BlockAdvantages.vue'
import BlockPrices from '@/components/BlockPrices.vue'
import BlockReviews from '@/components/BlockReviews.vue'
import BlockPresentation from '@/components/BlockPresentation.vue'
import BlockFAQ from '@/components/BlockFAQ.vue'
import BlockContacts from '@/components/BlockContacts.vue'
</script>
<template>
  <div class="flex flex-col gap-[120px]">

    <div class="flex flex-col bg-light-gray rounded-b-[40px]">
      <TheHeader />
      <BlockIntro />
    </div>

    <BlockAdvantages />
    <BlockPrices />
    <BlockClients />
    <BlockReviews />
    <BlockPromo />
    <BlockRegistration />
    <BlockRegistrationSteps />
    <BlockPresentation />
    <BlockWhy />
    <BlockRegistration reversed />
    <BlockFAQ />
    <BlockInfo />
    <BlockContacts />

    <TheFooter />
  </div>
</template>
