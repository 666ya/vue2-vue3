const {ref, onMounted, computed, toRefs, watch} = Vue

function fetchList() {
  fetch('../list.json')
  .then(response => {
    return response.json()
  })
}

export default {
  name: 'CompositeCom',
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    console.log(props)
    const { user } = toRefs(props)
    console.log(user)
    const list = ref([])
    const getList = () => {
      fetch('../list.json')
      .then(response => {
        return response.json()
      }).then(data => list.value = data)
    }
    onMounted(getList)
    const filterText = ref('')
    const filterList = computed(() => {
      return filterText.value ? list.value.filter(item => item.user.includes(filterText.value)) : list.value
    })

    // watch
    watch(user, getList)
    return {
      list,
      getList,
      filterText,
      filterList
    }
  },
  template: `
            <input v-model="filterText" placeholder="请输入姓名"/>
            <table>
                <thead>
                    <th>姓名</th>
                    <th>名称</th>
                    <th>价格</th>
                </thead>
                 <tbody>
                    <tr v-for="item in filterList">
                        <td>{{ item.user }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                    </tr>
                </tbody>
            </table>`
}