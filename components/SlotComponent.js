export default {
    name: 'SlotComponent',
    props: {
        url: String
    },
    data() {
        return {
            user: {
                name: '李白',
                age: '12',
                role: 'poem'
            }
        }
    },
    template: `
        <div class="container">
           <header>
            <slot name="header"></slot>
           </header>
           <main>
            <slot name="main"></slot>
            <slot name="default" :user="user">作者信息</slot>
           </main>
           <footer>
           <slot name="footer"></slot>
           </footer>
        </div>
    `
}