<template>
    <section>
      <base-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="dark"
                  expand
                  title=""
                  class="navbar-dark"
                  :content-id="`navbar-${menu.type}`">
            
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-12 collapse-close">
                    <close-button @click="closeMenu" :target="`navbar-${menu.type}`">

                    </close-button>
                </div>
                <div class="col-12 collapse-brand">
                        <small class="d-block text-uppercase font-weight-bold mb-3">See more examples</small>
                        <span class="text-center">This is a exercise development by <strong>Gabriel Mattesich</strong>. <br />
                            If you want to know more about my products, please visit:
                        </span>
                </div>
                <div class="col-12 collapse-brand">
                        <small class="d-block text-uppercase font-weight-bold mb-3">How to work</small>
                        <a href="">Docs</a>
                </div>
            </div>
            <component :is="menu.menuComponent"></component>
        </base-nav>
        <div class="mt-5">
            <table class="table">
              <thead>
                  <tr>
                      <th class="text-center">#</th>
                      <th>Topic</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                      <th>EtherScan</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="task in this.tasks" :key="task">
                  <td>{{task.id}}</td>
                  <td>{{task.topic}}</td>
                  <td>{{task.title}}</td>
                  <td>{{task.description}}</td>
                  <td>{{task.date}}</td>
                  <td>{{task.completed}}</td>
                  <td>Change</td>
                  <td>View history</td>
                </tr>
              </tbody>
          </table>
        </div>
    </section>
</template>
<script>

const Contract = require('web3-eth-contract');

const LOCAL_CONNECTION = 'http://127.0.0.1:8545/';
const ADRRES_CONTRACT = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ADDRES_ACCOUNT = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';
let jsonInterface = require('../../../artifacts/contracts/CrudExample.sol/CrudExample.json').abi;


import { ParticlesBg } from "particles-bg-vue";
import DatePickersVue from './components/JavascriptComponents/SingleDatePicker.vue';
import RegisterTaskModalVue from './components/JavascriptComponents/RegisterTaskModal.vue';
import TableComponent from './components/Table.vue';
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Menu6 from "./components/Navigation/Menu6";
export default {
    components: {
     ParticlesBg,
     DatePickersVue,
     RegisterTaskModalVue,
     TableComponent,
     Menu6,
     BaseNav,
     CloseButton
    },
    data() {
    return {
      tasks: '',
      menus: [
        { type: "dark", menuComponent: Menu6 }
      ]
    };
  },
  methods: {
    async getTasks() {
      Contract.setProvider(LOCAL_CONNECTION);
        var contract = new Contract(jsonInterface, ADRRES_CONTRACT);
        this.tasks = (await contract.methods.getTask().call());
        console.log('Get tasks', this.tasks);
        return this.tasks;
    },
  },
  mounted (){
    this.getTasks();
  }
};
</script>
<style>
</style>
