import store from "@/store";
import Dashboard from "@/views/Dashboard";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Dashboard, {
    localVue,
    store,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Dashboard", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has page-dashboard class", () => {
    expect(wrapper.contains(".page-dashboard")).toBe(true);
  });

  test("showing loading if purchase list is not provided", () => {
    expect(wrapper.contains(".page-dashboard__loading")).toBe(true);
  });
});
