import { shallowMount } from "@vue/test-utils";
import AppLoading from "@/components/AppLoading";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(AppLoading);
});

afterEach(() => {
  wrapper.destroy();
});

describe("AppLoading", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has app-loading class", () => {
    expect(wrapper.contains(".app-loading")).toBe(true);
  });
});
