<template>
    <div class="">
        <base-button block type="info" class=" mb-3" @click="modals.modal2 = true">
            Register Task
        </base-button>

        <modal :show.sync="modals.modal2"
                gradient="info"
                modal-classes="modal-info modal-dialog-centered">
            <h6 slot="header" class="modal-title" id="modal-title-notification">You will register your task into the blockchain</h6>

            <div class="py-3 text-center">
                <i class="ni ni-bell-55 ni-3x"></i>
                <h4 class="heading mt-4">You should read this!</h4>
                <p>In the next step you will create a new task.</p>
            </div>

            <template slot="footer">
                <base-button type="white">Ok, Got it</base-button>
                <base-button type="link"
                                text-color="white"
                                class="ml-auto"
                                @click="modals.modal2 = false">
                    Close
                </base-button>
            </template>
        </modal>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal3: false
      }
    };
  }
};
</script>
<style>
</style>
