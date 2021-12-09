import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Home from "./Home";
import { getUsers } from "../functions/users";

axios.get = jest.fn();
jest.mock("axios");
afterEach(cleanup);

describe("Home Test", () => {
  test("fetches stories from an API and displays them", async () => {
    const fakeResponse = [
      {
        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
      {
        id: 2,
        login: "defunkt",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      },
    ];
    await act(async () => {
      await axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: fakeResponse })
      );
      render(<Home />);
    });

    await expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
