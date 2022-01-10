function h(tag, props, children) {
    return {
        tag,
        props,
        children
    }
}

function mount(vnode, container) {
    let el = document.createElement(vnode.tag)
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key]
            el.setAttribute(key, value)
        }
    }
    if (vnode.children) {
        if (typeof vnode.children == 'string') {
            el.textContent = vnode.children
        } else {
            vnode.children.forEach(child => {
                mount(child, el)
            });
        }
    }
    container.appendChild(el)
}
// const dom = h('div', {
//     class: 'red'
// }, 'hello')
const dom = h('div', {
    class: 'red'
}, [h('span', null, 'hello')])
mount(dom, document.getElementById('app'))