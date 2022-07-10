<template>
    <section class="">
         <base-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="dark"
                  expand
                  title=""
                  class="navbar-dark"
                  :content-id="`navbar-${menu.type}`">
            
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-12 collapse-brand">
                        <small class="d-block text-uppercase font-weight-bold mb-3">See more examples</small>
                        <span class="text-center">This is a exercise development by <strong>Gabriel Mattesich</strong>. <br />
                            If you want to know more about my products, please visit:
                        </span>
                </div>
                <div class="col-12 collapse-close">
                    <close-button @click="closeMenu" :target="`navbar-${menu.type}`">

                    </close-button>
                </div>
                <div class="col-12 collapse-brand">
                        <small class="d-block text-uppercase font-weight-bold mb-3">How to work</small>
                        <a href="">Docs</a>
                </div>
            </div>
            <component :is="menu.menuComponent"></component>
        </base-nav>
        <div>
            <Task/>
        </div>
    </section>
</template>
<script>
// Dependencies to logical processsing
import Web3 from 'web3'
const Contract = require('web3-eth-contract');

const LOCAL_CONNECTION = 'ws://localhost:8546';
const ADRRES_CONTRACT = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ADDRES_ACCOUNT = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'
let jsonInterface = require('../../../artifacts/contracts/CrudExample.sol/CrudExample.json').abi;

// components
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Menu6 from "./components/Navigation/Menu6";
import Task from './Task.vue'
export default {
    components: {
    BaseNav,
    CloseButton,
    Menu6,
    Task,
  },
  data() {
    return {
      menus: [
        { type: "dark", menuComponent: Menu6 }
      ]
    };
  },
  methods: {
    getContractInformation() {
        Contract.setProvider(LOCAL_CONNECTION);
        var contract = new Contract(jsonInterface, ADRRES_CONTRACT);
        console.log(contract);
        console.log('Ganadores',contract.methods.getTask())
        // .on('receipt', function(meta){
        //     console.log('Receipt:', meta);
        // });
    }
  },
  mounted (){
     this.getContractInformation()
    },
};
</script>
<style>
</style>
