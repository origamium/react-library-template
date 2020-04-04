import { renderHook, act } from "@testing-library/react-hooks";
import { useHelloWorld } from "./useHelloWorld";

describe("useHelloWorld test", () => {
    jest.useFakeTimers();
    it("basic", () => {
        const res = renderHook(useHelloWorld);
        expect(res.result.current).toEqual("work in progress...");
    });

    it("after 4 seconds", () => {
        const res = renderHook(useHelloWorld);
        act(() => {
            jest.advanceTimersByTime(4001);
        });
        expect(res.result.current).toEqual("hello world!");
    });
});
