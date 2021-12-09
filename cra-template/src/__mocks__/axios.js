const mockResponse = {
  data: {
    results: [
      {
        login: "mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
      {
        login: "defunkt",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      },
      {
        login: "pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
      },
    ],
  },
};

export default {
  // get: jest.fn().mockResolvedValue({ data: [] }),
  get: jest.fn(() => Promise.resolve({ data: [] })),
};
