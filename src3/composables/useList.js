const {ref, onMounted, watch} = Vue
export default function getList(user) {
  const list = ref([])
  const getList = () => {
    fetch('../list.json')
    .then(response => {
      return response.json()
    }).then(data => list.value = data)
  }
  onMounted(getList)
  // watch
  watch(user, getList)
  return {
    list,
    getList
  }
}