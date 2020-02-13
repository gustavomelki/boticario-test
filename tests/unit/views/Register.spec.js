import { mount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import Register from "@/views/Register";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(VueRouter);

let wrapper;

beforeEach(() => {
  wrapper = mount(Register, {
    localVue,
    router,
    attachToDocument: true
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Register", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has page-register class", () => {
    expect(wrapper.contains(".page-register")).toBe(true);
  });

  test("calls the submit action correctly", () => {
    const onSubmitMock = jest.fn();
    wrapper.setMethods({ onSubmit: onSubmitMock });
    wrapper.find("[type='submit']").trigger("click");
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
