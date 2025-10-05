import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "./counter";

describe("Counter Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with count of 0", () => {
    const store = useCounterStore();
    expect(store.count).toBe(0);
  });

  it("increments the count", () => {
    const store = useCounterStore();
    store.increment();
    expect(store.count).toBe(1);
  });

  it("decrements the count", () => {
    const store = useCounterStore();
    store.count = 2;
    store.decrement();
    expect(store.count).toBe(1);
  });

  it("resets the count to 0", () => {
    const store = useCounterStore();
    store.count = 2;
    store.reset();
    expect(store.count).toBe(0);
  });
});
