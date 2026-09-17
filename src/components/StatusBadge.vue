<script setup lang="ts">
import type { ReadinessStatus } from '../types/release'

defineProps<{ status: ReadinessStatus }>()
</script>

<template>
  <span class="status-badge" :class="`status-${status}`">
    <span class="status-dot" aria-hidden="true"></span>
    {{ status === 'at-risk' ? 'At risk' : status.charAt(0).toUpperCase() + status.slice(1) }}
  </span>
</template>
