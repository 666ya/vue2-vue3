<template>
    <div class="com">
        <div>
            <h4>v-model底层实现</h4>
            <VModelChild
             :model-value="modelValue"
              @update:model-value="value => modelValue = value" 
              />
            <p>底层实现子组件v-model的值：{{ modelValue }}</p>
        </div>
        <div>
            <h4>defineModel实现v-model</h4>
            <VDefineModeChild 
            v-model:firstName.capitalize="firstName" 
            v-model.number="isCapitalize" />
            <p>
                是否大写: <span>{{ isCapitalize ? '是' : '否' }}</span>
            </p>
            <p>
                defineModel实现子组件v-model的值：{{ firstName }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect, useTemplateRef, capitalize } from 'vue';
import VModelChild from './child/VModelChild.vue';
import VDefineModeChild from './child/VDefineModeChild.vue';
// 组件v-model
//第一种3.4之前（底层实现）
const modelValue = ref(0)
// 第二种3.4之后defineModel
const firstName = ref()
const isCapitalize = ref(true)
</script>

<style></style>