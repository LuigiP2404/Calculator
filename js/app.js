/*
 OPERAZIONI
 0 = ADDIZIONE
 1 = SOTTRAZIONE
 2 = DIVISIONE
 3 = MOLTIPLICAZIONE
*/

const app = Vue.createApp({
    data() {
        return {
            result: '',
            finalResult: '',
            number1: null,
            number2: null,
            operation: null,
            disabled: false,
            disabledOp: false,
            disabledEq: true,
            showResult: true,
            showFinal: false
        }
    },
    methods: {
        editResult(num) {
            if (num == 11) {
                this.result += '.';
            } else {
                this.result += num;
            }  
            if (this.number1) {
                this.disabledEq = false;
            }
        },
        deleteNumber() {
            this.result = this.result.slice(0, -1);
        },
        resetNumber() {
            this.result = '';
            this.showFinal = false;
            this.showResult = true;
            this.disabledOp = false;
            this.disabled = false;
            this.disabledEq = true;
            this.finalResult = '';
            this.number1 = null;
            this.number2 = null;
        },
        getOperation(op) {
            this.operation = op;
            if (this.number1 === null) {
                this.number1 = parseFloat(this.result);
            }
            this.disabledOp = true;
            console.log(this.number1);
            this.result = '';
        },
        getFinalResult() {
            this.number2 = parseFloat(this.result);
            this.result = '';
            this.showResult = false;
            this.showFinal = true;
            this.disabledEq = true;
            switch(this.operation) {
            case 0: 
                this.finalResult = this.number1 + this.number2;
                break;
            case 1:
                this.finalResult = this.number1 - this.number2;
                break;
            case 2:
                this.finalResult = this.number1 / this.number2;
                break;
            case 3:
                this.finalResult = this.number1 * this.number2;
                break;
            default:
                break;
            }
            
        }
    },
    watch: {
        result(value) {
            if (value.includes('.')) {
                this.disabled = true;
            }
            if (!value.includes('.')) {
                this.disabled = false;
            }
        },
        
    }
     
});

app.mount('#app');
