import { defineStore } from "pinia";
import { ref,computed } from "vue";

// 组合式
export const useCounterStore = defineStore('counter', ()=> {
    const count =ref(0)
    const name = ref('Eudardo')
    const doubleCount = computed(()=> count.value * 2)
    function increment(){
        count.value ++;
    }
    return {
        count,
        name,
        doubleCount,
        increment
    }
})