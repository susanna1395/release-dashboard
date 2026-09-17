<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Release } from '../types/release'
import StatusBadge from './StatusBadge.vue'

const props = defineProps<{ releases: Release[] }>()
const query = ref('')

const filteredReleases = computed(() => {
  const term = query.value.trim().toLowerCase()
  if (!term) return props.releases
  return props.releases.filter((release) =>
    `${release.name} ${release.version} ${release.owner}`.toLowerCase().includes(term),
  )
})

function releaseStatus(release: Release) {
  if (release.checks.some((check) => check.status === 'blocked')) return 'blocked' as const
  if (release.checks.some((check) => check.status === 'at-risk')) return 'at-risk' as const
  return 'ready' as const
}
</script>

<template>
  <section class="release-panel">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Current pipeline</p>
        <h2>Releases</h2>
      </div>
      <label class="search-field">
        <span class="sr-only">Search releases</span>
        <input v-model="query" type="search" placeholder="Search releases" />
      </label>
    </div>

    <div v-if="filteredReleases.length" class="release-list">
      <RouterLink
        v-for="release in filteredReleases"
        :key="release.id"
        :to="{ name: 'release-detail', params: { id: release.id } }"
        class="release-row"
      >
        <div>
          <strong>{{ release.name }} {{ release.version }}</strong>
          <p>{{ release.summary }}</p>
        </div>
        <div class="release-meta">
          <span>{{ release.owner }}</span>
          <span>{{ release.targetDate }}</span>
          <StatusBadge :status="releaseStatus(release)" />
        </div>
      </RouterLink>
    </div>

    <div v-else class="empty-state">
      No releases match “{{ query }}”.
    </div>
  </section>
</template>
