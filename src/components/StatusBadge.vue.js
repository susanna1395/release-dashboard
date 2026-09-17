const __VLS_props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "status-badge" },
    ...{ class: (`status-${__VLS_ctx.status}`) },
});
/** @type {__VLS_StyleScopedClasses['status-badge']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "status-dot" },
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['status-dot']} */ ;
(__VLS_ctx.status === 'at-risk' ? 'At risk' : __VLS_ctx.status.charAt(0).toUpperCase() + __VLS_ctx.status.slice(1));
// @ts-ignore
[status, status, status, status,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
