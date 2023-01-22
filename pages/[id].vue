<script lang="ts" setup>
import { useRoute } from '#imports';

const route = useRoute();
const id = route.params.id;
const article = await import(`../data/${id}.json`);
</script>

<template>
  <div>
    <p>{{ article.title }}</p>
    <p>{{ article.description }}</p>
  </div>
</template>

<style lang='scss' scoped></style>
