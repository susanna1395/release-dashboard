<script setup lang="ts">
import type { ReadinessCheck, ReadinessStatus } from '../types/release'
import StatusBadge from './StatusBadge.vue'

const props = defineProps<{
  checks: ReadinessCheck[]
}>()

const emit = defineEmits<{
  change: [checkId: string, status: ReadinessStatus]
}>()

const statuses: ReadinessStatus[] = ['ready', 'at-risk', 'blocked']

function update(checkId: string, event: Event) {
  emit('change', checkId, (event.target as HTMLSelectElement).value as ReadinessStatus)
}
</script>

<template>
  <section class="check-panel">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Release gates</p>
        <h2>Readiness checks</h2>
      </div>
      <span class="check-count">{{ props.checks.length }} checks</span>
    </div>

    <div class="check-list">
      <article v-for="check in props.checks" :key="check.id" class="check-row">
        <div class="check-main">
          <div class="check-title">
            <strong>{{ check.title }}</strong>
            <StatusBadge :status="check.status" />
          </div>
          <p>{{ check.note }}</p>
          <span class="check-owner">{{ check.category }} · {{ check.owner }}</span>
        </div>

        <label class="status-control">
          <span class="sr-only">Change status for {{ check.title }}</span>
          <select :value="check.status" @change="update(check.id, $event)">
            <option v-for="status in statuses" :key="status" :value="status">
              {{ status === 'at-risk' ? 'At risk' : status.charAt(0).toUpperCase() + status.slice(1) }}
            </option>
          </select>
        </label>
      </article>
    </div>
  </section>
</template>
