<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <p class="eyebrow">Release management</p>
        <RouterLink class="app-title" to="/">Release dasboard</RouterLink>
      </div>
      <RouterLink class="header-link" to="/">All releases</RouterLink>
    </header>

    <main class="page">
      <RouterView />
    </main>
  </div>
</template>
