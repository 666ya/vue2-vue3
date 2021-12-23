const PropInput = {
    name: 'PropInput',
    inheritAttrs: false,
    props: {
        label: String,
    },
    data() {
        return {
            isShow: false
        }
    },
    template: `
    <input class="inputClass" v-if="isShow" type="date"/>
    <label v-else>
        {{ label }}
        <input v-bind="$attrs"/>
    </label>
    `
}
const BaseInput = {
    name: 'BaseInput',
    props: ['value'],
    // methods: {
    //     showInputValue(event) {
    //         console.log(event.target.value)
    //     }
    // },
    template: `h
    <input v-bind:value="value" @change="$emit('input',$event.target.value)"/>
    `
}
const BaseRadio = {
    name: 'BaseRadio',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
    <div>
       <label>
        <input type="radio" value="男"/>
        男
       </label>
       <label>
       <input type="radio" value="女">
       女
       </label>
    </div>
    `
}
const template = `
    <div>
    aaa
    //    <propInput label="姓名" type="text" placeholder="请输入姓名"></propInput>
    //    <base-input v-model="baseInputValue" @input="showInputValue"></base-input>
    </div>
    `
export default {
    name: 'PropComponent',
    components: {
        // PropInput,
        // BaseInput,
        BaseRadio
    },
    data() {
        return {
            baseInputValue: 'baseInputValue',
            inputValue: '测试',
            radioChecked: '男'
        }
    },
    template
}