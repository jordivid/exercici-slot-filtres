import ModalBootstrap from './../components/ModalBootstrap.vue'

export default {
    name: 'Pare',
    components: {
        ModalBootstrap
    },
    data() {
        return {
            quantitat: '',
            obert: true
        }
    },
    methods: {
        tancar() {
            this.quantitat = '';
        },
        acceptar() {
            this.quantitat = '';
            this.$emit('enviar');
        },
        prueba() {
            alert("Hola");
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
    },
    emits: [
        'enviar',
        'ocultar'
    ]
}