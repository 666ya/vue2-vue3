const options = {
    createElement(tag) {
        return document.createElement(tag)
    },
    setElementText(el, text) {
        el.textContent = text
    },
    insert(el, parent, anchor) {
        parent.insertBefore(el, anchor)
    }
}

const render = createRenderer(options).render
const vnode = {
    type: 'p',
    children: '渲染器'
}
render(vnode, document.getElementById('app'))
setTimeout(() => {
    render(null, document.getElementById('app'))
}, 2000)