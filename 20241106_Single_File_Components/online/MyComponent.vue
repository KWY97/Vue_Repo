<template>
    <div class="greeting">
      {{ msg }}
    </div>
</template>

<!-- Vue CDN -->
<script setup>
import { ref } from 'vue'

const msg = ref('hello')
</script>

<style scoped>
.greeting {
    color: red;
}

</style>