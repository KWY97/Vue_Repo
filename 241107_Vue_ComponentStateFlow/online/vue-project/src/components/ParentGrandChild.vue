<template>
    <div>
        <p>{{ myMsg }}</p>
        <!-- updateName은 아래에 const에 사용된 updateName와만 같은 것. -->
        <!-- 그냥 현재 위치(ParentGrandChild)에서만 쓰는 것임. 메서드를 호출하기위해서임. -->
        <!-- 부모에게 올라가는 것은 const emit = defineEmits(['updateName']) 여기 있는 updateName임 -->
        <!-- 저 updateName은 emit('updateName')의 updateName과 같은 것. -->
        <button @click="updateName">이름 변경</button>
    </div>
</template>

<script setup>
defineProps({
    myMsg: String,
})

const emit = defineEmits(['updateName'])

const updateName = function () {
    emit('updateName')
}




</script>

<style scoped>

</style>