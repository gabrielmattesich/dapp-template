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
                <base-button type="white" @click="registerTask">Ok, Got it</base-button>
                <base-button type="white" @click="loginWallet">Get Tasks</base-button>
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
const Contract = require('web3-eth-contract');
const { v4: uuidv4 } = require('uuid');


const LOCAL_CONNECTION = 'http://127.0.0.1:8545/';
const ADRRES_CONTRACT = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ADDRES_ACCOUNT = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'
let jsonInterface = require('../../../../../artifacts/contracts/CrudExample.sol/CrudExample.json').abi;


import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal2: false
      }
    };
  },
  methods: {
    getContractInformation() {
        Contract.setProvider(LOCAL_CONNECTION);
        var contract = new Contract(jsonInterface, ADRRES_CONTRACT);
        console.log(contract);
    },
    registerTask(data) {
        Contract.setProvider(LOCAL_CONNECTION);
        const contract = new Contract(jsonInterface, ADRRES_CONTRACT);
        // const payload = {
        //   id: uuid.v4() || '',
        //   topic: data.topic || 'hola',
        //   description: data.description || 'hola',
        //   date: Date.now() || '0000',
        //   status: data.status || false
        // } 
        contract.methods.createTask('asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd').send({from: ADDRES_ACCOUNT, gas: 3000000})
        this.modals.modal2 = false
    },
    getTasks() {
      Contract.setProvider(LOCAL_CONNECTION);
        var contract = new Contract(jsonInterface, ADRRES_CONTRACT);
        console.log('Get tasks', contract.methods.getTask());
    },
    loginWallet() {
        if (typeof window.ethereum !== 'undefined') {
            ethereum.request({ method: 'eth_requestAccounts' });
        } else {
          alert("Don't have MetaMask");
        }
    }
  },
  mounted (){
    this.getContractInformation();
  },  
};
</script>
<style>
</style>
