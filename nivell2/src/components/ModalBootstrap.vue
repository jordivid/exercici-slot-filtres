<template>
    <div>
        <!-- Button to Open the Modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
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