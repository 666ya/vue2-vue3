// 事件处理
export default {
    name: 'EventComponent',
    methods: {
        handleOne() {
            console.log('第一次')
        },
        handleTwo() {
            console.log('第二次')
        }
    },
    template: `
    <p @click="handleOne(),handleTwo()">多个事件处理器</p>
    `
}