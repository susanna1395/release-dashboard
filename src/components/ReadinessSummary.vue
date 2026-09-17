<script setup lang="ts">
defineProps<{
  percentage: number
  ready: number
  atRisk: number
  blocked: number
}>()
</script>

<template>
  <section class="summary-grid" aria-label="Release dashboard summary">
    <article class="summary-card">
      <span class="summary-label">Ready</span>
      <strong>{{ ready }}</strong>
      <span class="summary-caption">checks passing</span>
    </article>
    <article class="summary-card">
      <span class="summary-label">At risk</span>
      <strong>{{ atRisk }}</strong>
      <span class="summary-caption">need attention</span>
    </article>
    <article class="summary-card">
      <span class="summary-label">Blocked</span>
      <strong>{{ blocked }}</strong>
      <span class="summary-caption">preventing release</span>
    </article>
    <article class="summary-card summary-card-primary">
      <span class="summary-label">Readiness</span>
      <strong>{{ percentage }}%</strong>
      <span class="summary-caption">of checks ready</span>
    </article>
  </section>
</template>
