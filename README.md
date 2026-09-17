# Release dashboard

A small Vue 3 application I built as a personal case study to explore a practical release-management workflow.

The idea is intentionally simple: before shipping a release, a team needs a quick view of the checks that can affect release readiness. This demo models those checks locally rather than connecting to a real service.

## What I wanted to explore

- Vue 3 Composition API with TypeScript
- Pinia for release/application state
- Route-based dashboard and release detail views
- Reusable components instead of a single page component
- Accessible status controls and keyboard-friendly navigation
- Derived readiness metrics from domain state
- Vitest tests around the store's behaviour
- Responsive UI without adding a large styling framework

## Technical decisions

**Application state vs UI state**

Release data and mutations live in the Pinia store. Search text stays local to the release list because it is view-specific state.

**Derived readiness**

Readiness is calculated from the underlying checks rather than stored as another mutable value. This avoids having two sources of truth.

**Routing**

The dashboard answers "what needs attention?" and the detail route answers "what is happening with this release?" Keeping those concerns separate makes the UI easier to extend.

**Mocked data**

There is no backend in this case study. The data is deliberately local so the frontend architecture and interaction model can be evaluated without pretending to have a production API.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Tests:

```bash
npm test
```
