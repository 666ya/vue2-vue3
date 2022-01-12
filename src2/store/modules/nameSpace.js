const nameSpace = {
    namespaced: true,
    state: {
        count: 100,
        title: '命名空间',
        list: [{
                id: 1,
                text: 'nameSpace三国演义',
                done: false
            },
            {
                id: 2,
                text: 'nameSpace红楼梦',
                done: true
            },
            {
                id: 3,
                text: 'nameSpace西游记',
                done: true
            },
            {
                id: 4,
                text: 'nameSpace水浒传',
                done: true
            }
        ]
    },
    mutations: {
        increament(state) {
            console.log('命名空间调用mutations')
            state.count++
        }
    },
    actions: {
        add: {
            root: true,
            handler(context) {
                context.dispatch('increament', null, {
                    root: true
                })
            }
        },
        increament(context) {
            console.log('命名空间调用actions')
            // context.commit('increament', null, {
            //     root: true
            // })
            // context.dispatch('increament', null, {
            //     root: true
            // })
            context.commit('increament')
        }
    },
    getters: {
        doneList: (state, getters) => {
            console.log('命名空间调用getters')
            return state.list.filter(item => item.done)
        }
    }
}