const count = ref(1)
var options = {
    createElement(tag) {
        return document.createElement(tag)
    },
    insert(el, parent, anchor = null) {
        return parent.insertBefore(el, anchor)
    },
    setElementText(el, text) {
        el.textContent = text
    }
}
const renderer = createRenderer(options)
const vnode = {
    type: 'p',
    props: {
        id: 'foo',
    },
    children: [{
        type: 'input',
        props: {
            disabled: ''
        }
    }]
}


effect(() => {
    renderer.render(vnode, document.getElementById('app'))
})

// setTimeout(() => {
//     count.value++
// }, 2000)