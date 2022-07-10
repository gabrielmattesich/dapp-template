<template>
    <section class="section  section-lg my-0">
      <particles-bg type="thick" :bg="true" />
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Make your next task</small>
                            </div>
                        </template>
                        <template>
                            <form role="form">
                                <small class="d-block text-uppercase font-weight-bold mb-3">Task Description</small>
                                <base-input alternative
                                            class="mb-3 text-center"
                                            placeholder="Automatic generated task id"
                                            disabled>
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Topic"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Title"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            placeholder="Description"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <DatePickersVue />
                                <small class="d-block text-uppercase font-weight-bold mb-3">Status</small>
                                <div class="text-muted font-italic">
                                    <base-checkbox>
                                    <span>Is you check this task, That the task is completed.</span>
                                </base-checkbox>
                                </div>
                                <div class="text-center">
                                    <RegisterTaskModalVue class="my-4"></RegisterTaskModalVue>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";
import DatePickersVue from './components/JavascriptComponents/SingleDatePicker.vue';
import RegisterTaskModalVue from './components/JavascriptComponents/RegisterTaskModal.vue';
export default {
    components: {
     ParticlesBg,
     DatePickersVue,
     RegisterTaskModalVue
    }
};
</script>
<style>
</style>
