<template>
    <div>
        <!-- Button to Open the Modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" @click="$emit('mostrar')">
        Open modal
        </button>

        <!-- The Modal -->
        <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <slot name="header"></slot>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <slot name="body"></slot>
                <p class="mt-2 mb-0 text-center">El canvi de {{cant | Inicializar}}€ en dòlars son {{cant | Convertir}}$</p>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>

            </div>
        </div>
        </div>
    </div>
</template>

<script src="./../scripts/ModalBootstrap.js"></script>