// component
const {
    h
} = Vue
const IdCom = {
    name: 'idcom',
    template: `<span><slot></slot></span>`
}
const InstanceCom = {
    data() {
        return {
            title: 'aaa'
        }
    },
    template: `<span><slot></slot></span>`
}
const Com = {
    components: {
        IdCom
    },
    data() {
        return {
            instanceCom: InstanceCom,
            vnode: ''
        }
    },
    mounted() {
        this.vnode = h('a', {
            style: 'color: red'
        }, this.$slots)
        console.log(this.$slots)
    },
    template: `
    <div>
        <h4>component</h4>
        <hr/>
        <p><component is='a' href="http://www.baidu.com" target="_blank">渲染原生元素</component></p>
        <p><component is='IdCom'>组件ID渲染组件</component></p>
        <p><component :is="instanceCom">组件自身渲染组件</component></p>
         <p><component :is='vnode'>Vnode</component></p>
    </div>
    `
}
// transition
const TransitionCom = {
    name: 'TransitonCom',
    data() {
        return {
            show: true
        }
    },
    template: `
        <div>
            <transition  appear :css="false" name = "fade": duration = "1000" >
                <p v-if="show">transiton内置组件</p>
            </transition>
            <button @click="show = !show">切换</button>
        </div>
    `
}
// 
const TeleportCom = {
    name: 'TeleportCom',
    template: `<div style="position: relative">
                <teleport to='body' disabled>
                    <div class="modal">loading……</div>
                </teleport>
                <!--<div class="modal">loading……</div>-->
            </div>`
}
// 内置组件
export default {
    name: 'BuiltInCom',
    components: {
        TransitionCom,
        TeleportCom
    },
    template: `<teleport-com></teleport-com>`
}