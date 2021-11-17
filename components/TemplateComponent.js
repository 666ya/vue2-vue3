 const TemplateComponent = {
     data() {
         return {
             isButtonDisabled: true
         }
     },
     template: `
        <button v-bind:disabled="isButtonDisabled">属性值</button>
        `
 }
 export default TemplateComponent