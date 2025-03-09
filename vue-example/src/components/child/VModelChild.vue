<template>
    <!-- v-model -->
    <div class="section">
        <h4>v-model底层逻辑</h4>
        <p>
            <input 
            type="text"
            :value="modelValue"
            @change="emit('update:modelValue', $event.target.value)" />
        </p>
    </div>
</template>

<script setup>
const { modelValue } = defineProps({
    modelValue: [Number,String],
})
const emit = defineEmits([
    'update:modelValue'
])

</script>

<style>
div.section {
    margin: 20px 0;
}
</style>