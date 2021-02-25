<template>
    <ModalBootstrap>
        <template #header>
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </template>

        <template #body>
            Modal body..
        </template>
        
        <template #footer>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </template>
    </ModalBootstrap>
</template>

<script src="./../scripts/Pare.js"></script>