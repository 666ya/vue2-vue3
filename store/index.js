    const {
        mapState,
        mapGetters,
        mapMutations,
        mapActions,
        createNamespacedHelpers
    } = Vuex
    Vue.use(Vuex)
    // Vuex
    const store = new Vuex.Store({
        state: {
            count: 1000,
            title: '全局空间',
            list: [{
                    id: 1,
                    text: 'global三国演义',
                    done: false
                },
                {
                    id: 2,
                    text: 'global红楼梦',
                    done: true
                },
                {
                    id: 3,
                    text: 'global西游记',
                    done: true
                },
                {
                    id: 4,
                    text: 'global水浒传',
                    done: true
                }
            ]
        },
        mutations: {
            increament(state) {
                console.log('全局空间调用mutations')
                state.count++
            }
        },
        actions: {
            increament(context) {
                console.log('全局空间调用actions')
                console.log(context)
                context.commit('increament')
            }
        },
        getters: {
            doneListFn: state => {
                console.log('全局空间调用getters')
                return state.list.filter(item => item.done)
            }
        },
        modules: {
            app: app,
            nameSpace: nameSpace
        }
    })
    // 模块动态注册
    store.registerModule('nested', {
        state: {
            test: 'aaa',
            list: [{
                    id: 1,
                    text: 'nested三国演义',
                    done: false
                },
                {
                    id: 2,
                    text: 'nested红楼梦',
                    done: true
                },
                {
                    id: 3,
                    text: 'nested西游记',
                    done: true
                },
                {
                    id: 4,
                    text: 'nested水浒传',
                    done: true
                }
            ]
        }
    }, {
        preserveStatus: true
    })
    store.registerModule(['nested', 'myModule'], {
        state: {
            count: -1,
            list: [{
                    id: 1,
                    text: 'myModule三国演义',
                    done: false
                },
                {
                    id: 2,
                    text: 'myModule红楼梦',
                    done: true
                },
                {
                    id: 3,
                    text: 'myModule西游记',
                    done: true
                },
                {
                    id: 4,
                    text: 'myModule水浒传',
                    done: true
                }
            ]
        },
        mutations: {
            selfModuleFn(state) {
                console.log('注册嵌套调用mutations')
                state.count--
            }
        }
    })