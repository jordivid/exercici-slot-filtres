export default {
    name: 'ModalBootstrap',
    methods: {
        mostrarDialeg() {
            this.$emit('mostrar');
        }
    },
    emits: [
        'mostrar'
    ]
}