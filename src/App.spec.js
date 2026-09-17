import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useReleaseStore } from './stores/release';
describe('release store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it('calculates readiness from the selected release checks', () => {
        const store = useReleaseStore();
        expect(store.readiness).toEqual({
            percentage: 88,
            ready: 7,
            atRisk: 1,
            blocked: 0,
        });
    });
    it('updates a check and recalculates readiness', () => {
        const store = useReleaseStore();
        const release = store.selectedRelease;
        store.setCheckStatus(release.id, release.checks[0].id, 'blocked');
        expect(store.readiness.blocked).toBe(1);
        expect(store.readiness.percentage).toBe(75);
    });
    it('ignores an unknown release id when selecting', () => {
        const store = useReleaseStore();
        const original = store.selectedReleaseId;
        store.selectRelease('does-not-exist');
        expect(store.selectedReleaseId).toBe(original);
    });
});
