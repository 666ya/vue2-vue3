const {ref, computed } = Vue
export default function useNameSearch(list) {
  const filterText = ref('')
  const filterList = computed(() => {
    return filterText.value ? list.value.filter(item => item.user.includes(filterText.value)) : list.value
  })
  return {
    filterText,
    filterList
  }
}