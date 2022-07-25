import AppHeader from "@/components/AppHeader";
import store from "@/store";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import { Vue } from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(AppHeader, {
    localVue,
    store,
    stubs: ["font-awesome-icon"],
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("AppHeader", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has app-header class", () => {
    expect(wrapper.contains(".app-header")).toBe(true);
  });

  test("toggle menu on click buttons", async () => {
    const toggleBtn = wrapper.find(".app-header__btn--toggle");
    toggleBtn.trigger("click");
    await Vue.nextTick();
    expect(wrapper.contains(".app-header__collapse--opened")).toBe(true);

    const closeBtn = wrapper.find(".app-header__btn--close");
    closeBtn.trigger("click");
    await Vue.nextTick();
    expect(wrapper.contains(".app-header__collapse--opened")).toBe(false);
  });
});
