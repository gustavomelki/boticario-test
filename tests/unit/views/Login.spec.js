import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Login from "@/views/Login";
import store from "@/store";

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(VueRouter);
localVue.use(Vuex);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Login, {
    localVue,
    store,
    attachToDocument: true
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Login", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has page-login class", () => {
    expect(wrapper.contains(".page-login")).toBe(true);
  });

  test("calls the submit action correctly", () => {
    const onSubmitMock = jest.fn();
    wrapper.setMethods({ onSubmit: onSubmitMock });
    wrapper.find("[type='submit']").trigger("click");
    expect(onSubmitMock).toHaveBeenCalled();

    expect(wrapper.vm.required).toBe(false);
  });
});
