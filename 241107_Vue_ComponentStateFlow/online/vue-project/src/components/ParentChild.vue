<template>
    <div>
        <p>{{ myMsg }}</p>
        <p>{{ dynamicProps }}</p>
        <ParentGrandChild :my-msg="myMsg" />
    </div>
</template>


<script setup>
import ParentGrandChild from '@/components/ParentGrandChild.vue';

// 내려받은 props를 선언
// 1. 배열 선언 방식
// defineProps(['myMsg'])

// 2. 객체 선언 방식
defineProps({
    myMsg: String,
    dynamicProps: String,
})

// props 데이터를 활용해야하는 경우
// const props = defineProps({ myMsg: String })
// console.log(props)
// console.log(props.myMsg)

</script>


<style scoped>

</style>