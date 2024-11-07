<template>
  <div>
    <ParentChild 
      my-msg="message" 
      :dynamic-props="name"
    />
    <ParentItem
      v-for="item in items"
      :key="item.id"
      :my-prop="item"
    />
  </div>
</template>


<script setup>
import ParentChild from '@/components/ParentChild.vue';
import ParentItem from '@/components/ParentItem.vue';
import { ref } from 'vue'

const name = ref('Alice')
const items = ref([
    {id: 1, name: '사과'},
    {id: 2, name: '바나나'},
    {id: 3, name: '딸기'}
])

</script>


<style scoped>

</style>