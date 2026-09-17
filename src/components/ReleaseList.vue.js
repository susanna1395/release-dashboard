import { computed, ref } from 'vue';
import StatusBadge from './StatusBadge.vue';
const props = defineProps();
const query = ref('');
const filteredReleases = computed(() => {
    const term = query.value.trim().toLowerCase();
    if (!term)
        return props.releases;
    return props.releases.filter((release) => `${release.name} ${release.version} ${release.owner}`.toLowerCase().includes(term));
});
function releaseStatus(release) {
    if (release.checks.some((check) => check.status === 'blocked'))
        return 'blocked';
    if (release.checks.some((check) => check.status === 'at-risk'))
        return 'at-risk';
    return 'ready';
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "release-panel" },
});
/** @type {__VLS_StyleScopedClasses['release-panel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "section-heading" },
});
/** @type {__VLS_StyleScopedClasses['section-heading']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "eyebrow" },
});
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "search-field" },
});
/** @type {__VLS_StyleScopedClasses['search-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "sr-only" },
});
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "search",
    placeholder: "Search releases",
});
(__VLS_ctx.query);
if (__VLS_ctx.filteredReleases.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "release-list" },
    });
    /** @type {__VLS_StyleScopedClasses['release-list']} */ ;
    for (const [release] of __VLS_vFor((__VLS_ctx.filteredReleases))) {
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
        RouterLink;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            key: (release.id),
            to: ({ name: 'release-detail', params: { id: release.id } }),
            ...{ class: "release-row" },
        }));
        const __VLS_2 = __VLS_1({
            key: (release.id),
            to: ({ name: 'release-detail', params: { id: release.id } }),
            ...{ class: "release-row" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        /** @type {__VLS_StyleScopedClasses['release-row']} */ ;
        const { default: __VLS_5 } = __VLS_3.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
        (release.name);
        (release.version);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (release.summary);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "release-meta" },
        });
        /** @type {__VLS_StyleScopedClasses['release-meta']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (release.owner);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (release.targetDate);
        const __VLS_6 = StatusBadge;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            status: (__VLS_ctx.releaseStatus(release)),
        }));
        const __VLS_8 = __VLS_7({
            status: (__VLS_ctx.releaseStatus(release)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        // @ts-ignore
        [query, filteredReleases, filteredReleases, releaseStatus,];
        var __VLS_3;
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "empty-state" },
    });
    /** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
    (__VLS_ctx.query);
}
// @ts-ignore
[query,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
