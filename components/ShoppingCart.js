const template = `
    <div>
        <p>  {{title}}：{{ count }} </p>
    </div>
    `
// const {
//   mapState,
//   mapActions,
//   mapGetters,
//   mapMutations
// } = createNamespacedHelpers('nameSpace')
export default {
  name: 'ShoppingCart',
  data() {
    return {
      filterList: []
    }
  },
  computed: {
    ...mapState(['count']),
    // ...mapGetters('nameSpace', {
    //   list: 'doneList'
    // }),
    ...mapState(['title']),
    // ...mapState('nameSpace', ['title'])
  },
  mounted() {
    console.log(this.$store)
    // register
    this.registerFn()
    // nameSpace
    // this.nameSpaceFn()
  },
  methods: {
    registerFn() {
      console.log(store.hasModule('nested'))
      console.log(store.hasModule('myModule'))

      alert(this.$store.state.nested.test)
      this.$store.commit('selfModuleFn')
    },
    nameSpaceFn() {
      this.$store.dispatch({
        type: 'nameSpace/increament'
      })
      console.log(this.$store.state.app.count)
      console.log(this.$store.state.nameSpace.count)
      console.log(this.$store.state.count)
    }
    // ...mapMutations({
    //   add: 'increament'
    // }),
    // ...mapActions('nameSpace', ['increament']),
    // ...mapMutations('nameSpace', {
    //   add: 'increament'
    // })
  },
  template: template
}