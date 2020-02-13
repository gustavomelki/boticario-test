import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import money from "v-money";
import PurchasesRegister from "@/views/PurchasesRegister";

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(money);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(PurchasesRegister, {
    localVue,
    attachToDocument: true
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Purchases Register", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has page-purchases-register class", () => {
    expect(wrapper.contains(".page-purchases-register")).toBe(true);
  });

  test("calls the submit action correctly", () => {
    const onSubmitMock = jest.fn();
    wrapper.setMethods({ onSubmit: onSubmitMock });
    wrapper.find("[type='submit']").trigger("click");
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
