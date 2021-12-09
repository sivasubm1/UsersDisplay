import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import App from "./App";

describe("App Test", () => {
    test("it renders", async () => {
        render(<App />);
    });


});