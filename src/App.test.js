import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import App from "./App.vue";

describe("App Component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("displays initial count of 0", () => {
    const wrapper = mount(App);
    expect(wrapper.find("h1").text()).toBe("0");
  });

  it("increments count when + button is clicked", async () => {
    const wrapper = mount(App);
    const incrementBtn = wrapper.find('[data-testid="increment-btn"]');
    await incrementBtn.trigger("click");
    expect(wrapper.find("h1").text()).toBe("1");
  });

  it("decrements count when - button is clicked", async () => {
    const wrapper = mount(App);
    const decrementBtn = wrapper.find('[data-testid="decrement-btn"]');

    await decrementBtn.trigger("click");
    expect(wrapper.find("h1").text()).toBe("-1");
  });

  it("resets count when reset button is clicked", async () => {
    const wrapper = mount(App);
    const incrementBtn = wrapper.find('[data-testid="increment-btn"]');
    const resetBtn = wrapper.find('[data-testid="reset-btn"]');

    await incrementBtn.trigger("click");
    await incrementBtn.trigger("click");
    expect(wrapper.find("h1").text()).toBe("2");

    await resetBtn.trigger("click");
    expect(wrapper.find("h1").text()).toBe("0");
  });
});
