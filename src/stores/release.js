import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { releases as seedReleases } from '../data/releases';
export const useReleaseStore = defineStore('releases', () => {
    const releases = ref(structuredClone(seedReleases));
    const selectedReleaseId = ref(releases.value[0]?.id ?? '');
    const selectedRelease = computed(() => releases.value.find((release) => release.id === selectedReleaseId.value) ?? null);
    const readiness = computed(() => {
        if (!selectedRelease.value) {
            return { percentage: 0, blocked: 0, atRisk: 0, ready: 0 };
        }
        const checks = selectedRelease.value.checks;
        const ready = checks.filter((check) => check.status === 'ready').length;
        const atRisk = checks.filter((check) => check.status === 'at-risk').length;
        const blocked = checks.filter((check) => check.status === 'blocked').length;
        return {
            percentage: Math.round((ready / checks.length) * 100),
            ready,
            atRisk,
            blocked,
        };
    });
    function selectRelease(id) {
        if (releases.value.some((release) => release.id === id)) {
            selectedReleaseId.value = id;
        }
    }
    function setCheckStatus(releaseId, checkId, status) {
        const release = releases.value.find((item) => item.id === releaseId);
        const check = release?.checks.find((item) => item.id === checkId);
        if (check) {
            check.status = status;
        }
    }
    function resetDemo() {
        releases.value = structuredClone(seedReleases);
        selectedReleaseId.value = releases.value[0]?.id ?? '';
    }
    return { releases, selectedReleaseId, selectedRelease, readiness, selectRelease, setCheckStatus, resetDemo };
});
