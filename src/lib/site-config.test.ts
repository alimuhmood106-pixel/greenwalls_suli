import { describe, it, expect } from "vitest";
import { isOpenAt } from "./site-config";

// Baghdad is UTC+3
describe("opening hours", () => {
  it("open Saturday 14:00 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T11:00:00Z"))).toBe(true);
  });
  it("closed Saturday 12:30 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T09:30:00Z"))).toBe(false);
  });
  it("closed at 22:00 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T19:00:00Z"))).toBe(false);
  });
  it("closed all Friday", () => {
    expect(isOpenAt(new Date("2026-11-06T12:00:00Z"))).toBe(false);
  });
});
