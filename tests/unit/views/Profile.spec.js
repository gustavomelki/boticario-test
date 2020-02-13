import { mount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import Profile from "@/views/Profile";

const localVue = createLocalVue();
localVue.use(Vuelidate);

let wrapper;

beforeEach(() => {
  wrapper = mount(Profile, {
    localVue,
    attachToDocument: true
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Profile", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has page-profile class", () => {
    expect(wrapper.contains(".page-profile")).toBe(true);
  });

  test("calls the submit action correctly", () => {
    const onSubmitMock = jest.fn();
    wrapper.setMethods({ onSubmit: onSubmitMock });
    wrapper.find("[type='submit']").trigger("click");
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
