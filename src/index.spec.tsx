import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { App } from "./index";
import { act } from "react-dom/test-utils";

describe("App test", () => {
    jest.useFakeTimers();

    test("basic rendering", () => {
        const wrapper = render(<App />);
        expect(wrapper.getByTestId("main").textContent).toEqual("work in progress...");
    });

    it("after 4 seconds", () => {
        const wrapper = render(<App />);
        act(() => {
            jest.advanceTimersByTime(4001);
        });
        expect(wrapper.getByTestId("main").textContent).toEqual("hello world!");
    });
});
