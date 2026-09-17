<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import CheckList from '../components/CheckList.vue'
import ReadinessSummary from '../components/ReadinessSummary.vue'
import { useReleaseStore } from '../stores/release'
import type { ReadinessStatus } from '../types/release'

const route = useRoute()
const store = useReleaseStore()
const { releases } = storeToRefs(store)

const release = computed(() => releases.value.find((item) => item.id === route.params.id) ?? null)

if (release.value) {
  store.selectRelease(release.value.id)
}

const { readiness } = storeToRefs(store)

function changeStatus(checkId: string, status: ReadinessStatus) {
  if (release.value) {
    store.setCheckStatus(release.value.id, checkId, status)
  }
}
</script>

<template>
  <div v-if="release" class="detail">
    <RouterLink class="back-link" to="/">← Back to releases</RouterLink>

    <section class="detail-header">
      <div>
        <p class="eyebrow">{{ release.environment }} · Target {{ release.targetDate }}</p>
        <h1>{{ release.name }} {{ release.version }}</h1>
        <p class="hero-copy">{{ release.summary }}</p>
      </div>
      <div class="owner-card">
        <span>Release owner</span>
        <strong>{{ release.owner }}</strong>
      </div>
    </section>

    <ReadinessSummary
      :percentage="readiness.percentage"
      :ready="readiness.ready"
      :at-risk="readiness.atRisk"
      :blocked="readiness.blocked"
    />

    <CheckList :checks="release.checks" @change="changeStatus" />
  </div>

  <section v-else class="empty-state detail-not-found">
    <h1>Release not found</h1>
    <p>The release may have been removed from the demo data.</p>
    <RouterLink to="/">Return to releases</RouterLink>
  </section>
</template>
