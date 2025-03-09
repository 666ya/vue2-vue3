import { defineStore } from "pinia";
//选项式
export const useUserStore = defineStore('user',{
    state: ()=> ({
        loginCount: 12,
        name: 'Eudardo'
    }),
    getters: {
        doubleCount: (state) => state.loginCount * 2,
        doubleCountPlus: ()=> this.doubleCount+1
    },
    actions: {
        increment(){
            this.loginCount++;
        }
    }
})