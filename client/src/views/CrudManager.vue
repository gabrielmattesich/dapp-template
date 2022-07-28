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
        <div>
            <Task/>
        </div>
    </section>
</template>
<script>
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
  methods: { },
  mounted () { },
};
</script>
<style>
</style>
