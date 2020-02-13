import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import Cashback from "@/components/Cashback";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Cashback, {
    propsData: {
      label: "Label",
      value: "R$ 1.000,00"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Cashback", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has cashback class", () => {
    expect(wrapper.contains(".cashback")).toBe(true);
  });

  test("starts with loading icon", () => {
    expect(wrapper.find(".cashback__loading").exists()).toBe(true);
  });

  test("render correctly prop 'label'", () => {
    expect(wrapper.vm.label).toBe("Label");
  });

  test("render correctly prop 'value' and hide loading", async () => {
    expect(wrapper.vm.value).toBe("R$ 1.000,00");
    wrapper.setData({ loading: false });
    await Vue.nextTick();
    expect(wrapper.find(".cashback__loading").exists()).toBe(false);
  });

  test("showing loading if no one value is provided", () => {
    wrapper.setProps({ value: " " });
    expect(wrapper.find(".cashback__loading").exists()).toBe(true);
  });
});
