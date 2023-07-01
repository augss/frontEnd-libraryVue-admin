<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/categories">Categories</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
