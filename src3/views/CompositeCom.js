import useList from '../composables/useList.js'
import useNameSearch from "../composables/useNameSearch.js";
const { toRefs } = Vue
export default {
  name: 'CompositeCom',
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { user } = toRefs(props)
    const { list, getList } = useList(user)
    const { filterText, filterList } = useNameSearch(list)
    return {
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