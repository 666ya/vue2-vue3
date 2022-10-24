function createRenderer(options) {
    const {
        createElement,
        setElementText,
        insert
    } = options

    function mountElement(vnode, container) {
        const el = createElement(vnode.type)
        if (typeof vnode.children === 'string') {
            // el.textContent = vnode.children
            setElementText(el, vnode.children)
        } else if (Array.isArray(vnode.children)) {
            vnode.children.forEach(child => {
                path(null, child, el)
            })
        }
        if (vnode.props) {
            for (const key in vnode.props) {
                if (key in el) {
                    const type = typeof el[key]
                    const value = vnode.props[key]
                    if (type === 'boolean' && value === '') {
                        el[key] = true
                    } else {
                        el[key] = value
                    }
                } else {
                    el.setAttribute(key, vnode.props[key])
                }

            }
        }
        insert(el, container)
        // container.appendChild(el)
    }

    function path(n1, n2, container) {
        if (!n1) {
            mountElement(n2, container)
        } else {
            // 打补丁
        }
    }

    function render(vnode, container) {
        if (vnode) {
            path(container._vnode, vnode, container)
        } else {
            if (container._vnode) {
                container.innerHTML = ''
            }
        }
        container._vnode = vnode
    }
    return {
        render
    }
}