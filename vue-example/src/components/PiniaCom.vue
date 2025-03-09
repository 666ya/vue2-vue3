<template>
    <div class="com">
        <h4>Pinia</h4>
        <div>
            用户姓名： {{  name }}
            登录次数： {{  loginCount  }}
            <button @click="changeLogin">改变登录人</button>
            <button @click="increment">改变登录次数</button>
          
        </div>
        <div>
            业务计算： {{  counterStore.count  }}
            业务getters： {{  counterStore.doubleCount  }}
            插件静态属性： {{  counterStore.secret  }}
        </div>
    </div>
</template>

<script setup>
import { useCounterStore,useUserStore } from '@/store';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore()
// console.log(counterStore)
// console.log(storeToRefs(useUserStore()))
const {name, loginCount} =storeToRefs(useUserStore())
// 执行action
const {increment} = useUserStore()
// 变更sate
function changeLogin () {
    // console.log('changeLogin')
    // const useStore = useUserStore();
    useUserStore().$patch({
        name: '李白'
    })
    console.log( useUserStore())
}

</script>

<style></style>