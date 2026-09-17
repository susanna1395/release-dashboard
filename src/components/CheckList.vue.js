import StatusBadge from './StatusBadge.vue';
const props = defineProps();
const emit = defineEmits();
const statuses = ['ready', 'at-risk', 'blocked'];
function update(checkId, event) {
    emit('change', checkId, event.target.value);
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "check-panel" },
});
/** @type {__VLS_StyleScopedClasses['check-panel']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "check-count" },
});
/** @type {__VLS_StyleScopedClasses['check-count']} */ ;
(props.checks.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "check-list" },
});
/** @type {__VLS_StyleScopedClasses['check-list']} */ ;
for (const [check] of __VLS_vFor((props.checks))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        key: (check.id),
        ...{ class: "check-row" },
    });
    /** @type {__VLS_StyleScopedClasses['check-row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "check-main" },
    });
    /** @type {__VLS_StyleScopedClasses['check-main']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "check-title" },
    });
    /** @type {__VLS_StyleScopedClasses['check-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (check.title);
    const __VLS_0 = StatusBadge;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        status: (check.status),
    }));
    const __VLS_2 = __VLS_1({
        status: (check.status),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (check.note);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "check-owner" },
    });
    /** @type {__VLS_StyleScopedClasses['check-owner']} */ ;
    (check.category);
    (check.owner);
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "status-control" },
    });
    /** @type {__VLS_StyleScopedClasses['status-control']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "sr-only" },
    });
    /** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
    (check.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
        ...{ onChange: (...[$event]) => {
                return (__VLS_ctx.update(check.id, $event));
                // @ts-ignore
                [update,];
            } },
        value: (check.status),
    });
    for (const [status] of __VLS_vFor((__VLS_ctx.statuses))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
            key: (status),
            value: (status),
        });
        (status === 'at-risk' ? 'At risk' : status.charAt(0).toUpperCase() + status.slice(1));
        // @ts-ignore
        [statuses,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
