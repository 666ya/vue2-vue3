  const app = {
      state: {
          count: 0,
          title: '未命名空间',
          list: [{
                  id: 1,
                  text: 'app三国演义',
                  done: false
              },
              {
                  id: 2,
                  text: 'app红楼梦',
                  done: true
              },
              {
                  id: 3,
                  text: 'app西游记',
                  done: true
              },
              {
                  id: 4,
                  text: 'app水浒传',
                  done: true
              }
          ]
      },
      mutations: {
          increament(state) {
              console.log('未命名调用mutations')
              state.count++
          }
      },
      actions: {
          increament(context) {
              console.log('未命名调用actions')
              console.log(context)
              context.commit('increament')
          }
      },
      getters: {
          doneList: (state, getters, rootState, rootGetters) => {
              console.log('未命名调用getters')
              return state.list.filter(item => item.done)
          }
      }
  }