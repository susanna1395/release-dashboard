import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import CheckList from '../components/CheckList.vue';
import ReadinessSummary from '../components/ReadinessSummary.vue';
import { useReleaseStore } from '../stores/release';
const route = useRoute();
const store = useReleaseStore();
const { releases } = storeToRefs(store);
const release = computed(() => releases.value.find((item) => item.id === route.params.id) ?? null);
if (release.value) {
    store.selectRelease(release.value.id);
}
const { readiness } = storeToRefs(store);
function changeStatus(checkId, status) {
    if (release.value) {
        store.setCheckStatus(release.value.id, checkId, status);
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.release) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "detail" },
    });
    /** @type {__VLS_StyleScopedClasses['detail']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ class: "back-link" },
        to: "/",
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "back-link" },
        to: "/",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['back-link']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    // @ts-ignore
    [release,];
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "detail-header" },
    });
    /** @type {__VLS_StyleScopedClasses['detail-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "eyebrow" },
    });
    /** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
    (__VLS_ctx.release.environment);
    (__VLS_ctx.release.targetDate);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    (__VLS_ctx.release.name);
    (__VLS_ctx.release.version);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "hero-copy" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-copy']} */ ;
    (__VLS_ctx.release.summary);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "owner-card" },
    });
    /** @type {__VLS_StyleScopedClasses['owner-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.release.owner);
    const __VLS_6 = ReadinessSummary;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        percentage: (__VLS_ctx.readiness.percentage),
        ready: (__VLS_ctx.readiness.ready),
        atRisk: (__VLS_ctx.readiness.atRisk),
        blocked: (__VLS_ctx.readiness.blocked),
    }));
    const __VLS_8 = __VLS_7({
        percentage: (__VLS_ctx.readiness.percentage),
        ready: (__VLS_ctx.readiness.ready),
        atRisk: (__VLS_ctx.readiness.atRisk),
        blocked: (__VLS_ctx.readiness.blocked),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_11 = CheckList;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        ...{ 'onChange': {} },
        checks: (__VLS_ctx.release.checks),
    }));
    const __VLS_13 = __VLS_12({
        ...{ 'onChange': {} },
        checks: (__VLS_ctx.release.checks),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    let __VLS_16;
    const __VLS_17 = {
        /** @type {typeof __VLS_16.change} */
        onChange: (__VLS_ctx.changeStatus),
    };
    var __VLS_14;
    var __VLS_15;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "empty-state detail-not-found" },
    });
    /** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
    /** @type {__VLS_StyleScopedClasses['detail-not-found']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    let __VLS_18;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        to: "/",
    }));
    const __VLS_20 = __VLS_19({
        to: "/",
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const { default: __VLS_23 } = __VLS_21.slots;
    // @ts-ignore
    [release, release, release, release, release, release, release, readiness, readiness, readiness, readiness, changeStatus,];
    var __VLS_21;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
