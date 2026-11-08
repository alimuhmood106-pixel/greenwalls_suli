import { describe, it, expect } from "vitest";
import { isOpenAt } from "./site-config";

// Baghdad is UTC+3
describe("opening hours", () => {
  it("open Saturday 14:00 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T11:00:00Z"))).toBe(true);
  });
  it("closed Saturday 08:30 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T05:30:00Z"))).toBe(false);
  });
  it("open Saturday 09:00 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T06:00:00Z"))).toBe(true);
  });
  it("open Saturday 16:29 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T13:29:00Z"))).toBe(true);
  });
  it("closed at 16:30 Baghdad", () => {
    expect(isOpenAt(new Date("2026-11-07T13:30:00Z"))).toBe(false);
  });
  it("closed all Friday", () => {
    expect(isOpenAt(new Date("2026-11-06T12:00:00Z"))).toBe(false);
  });
});
