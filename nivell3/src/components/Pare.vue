<template>
    <div>
        <slot></slot>
        <ModalBootstrap @mostrar="this.$emit('ocultar')" @mostrar2="prueba">
            <template #header>
                <h4 class="modal-title">Conversor de moneda</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </template>

            <template #body>
                <h3>Introduir quantitat</h3>
                <input type="number" class="text-right" step="0.1" v-model.number="quantitat">
                <p class="mt-2 mb-0 text-center">El canvi de {{quantitat | Inicializar}}€ en dòlars son {{quantitat | Convertir}}$</p>
            </template>
            
            <template #footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="tancar">Tancar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="acceptar">Enviar</button>
            </template>
        </ModalBootstrap>
    </div>
</template>

<script src="./../scripts/Pare.js"></script>