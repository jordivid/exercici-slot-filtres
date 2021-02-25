import ModalBootstrap from './../components/ModalBootstrap.vue'

export default {
    name: 'Pare',
    components: {
        ModalBootstrap
    },
    data() {
        return {
            quantitat: ''
        }
    },
    methods: {
        tancar() {
            this.quantitat = '';
        }
    },
    filters: {
        Convertir(value) {
            const rate = 1.23;
            return (value * rate).toFixed(2);
        },
        Inicializar(value) {
            if (value == "") {
                value = 0;
            }
            return value;
        }
    }
}