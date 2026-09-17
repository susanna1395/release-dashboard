import { storeToRefs } from 'pinia';
import ReadinessSummary from '../components/ReadinessSummary.vue';
import ReleaseList from '../components/ReleaseList.vue';
import { useReleaseStore } from '../stores/release';
const store = useReleaseStore();
const { releases, readiness } = storeToRefs(store);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dashboard" },
});
/** @type {__VLS_StyleScopedClasses['dashboard']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "hero" },
});
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "eyebrow" },
});
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "hero-copy" },
});
/** @type {__VLS_StyleScopedClasses['hero-copy']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.store.resetDemo) },
    ...{ class: "secondary-button" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['secondary-button']} */ ;
const __VLS_0 = ReadinessSummary;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    percentage: (__VLS_ctx.readiness.percentage),
    ready: (__VLS_ctx.readiness.ready),
    atRisk: (__VLS_ctx.readiness.atRisk),
    blocked: (__VLS_ctx.readiness.blocked),
}));
const __VLS_2 = __VLS_1({
    percentage: (__VLS_ctx.readiness.percentage),
    ready: (__VLS_ctx.readiness.ready),
    atRisk: (__VLS_ctx.readiness.atRisk),
    blocked: (__VLS_ctx.readiness.blocked),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = ReleaseList;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    releases: (__VLS_ctx.releases),
}));
const __VLS_7 = __VLS_6({
    releases: (__VLS_ctx.releases),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[store, readiness, readiness, readiness, readiness, releases,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
