<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ReadinessSummary from '../components/ReadinessSummary.vue'
import ReleaseList from '../components/ReleaseList.vue'
import { useReleaseStore } from '../stores/release'

const store = useReleaseStore()
const { releases, readiness } = storeToRefs(store)
</script>

<template>
  <div class="dashboard">
    <section class="hero">
      <div>
        <p class="eyebrow">Engineering delivery</p>
        <h1>Are we ready to ship?</h1>
        <p class="hero-copy">
          Review release gates across accessibility, APIs, security, performance and delivery.
        </p>
      </div>
      <button class="secondary-button" type="button" @click="store.resetDemo">
        Reset demo data
      </button>
    </section>

    <ReadinessSummary
      :percentage="readiness.percentage"
      :ready="readiness.ready"
      :at-risk="readiness.atRisk"
      :blocked="readiness.blocked"
    />

    <ReleaseList :releases="releases" />
  </div>
</template>
