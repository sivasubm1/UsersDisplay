import axios from "axios";

export const getUsers = async () =>
  await axios.get("https://api.github.com/users");

export const getRepositories = async (userId) =>
  await axios.get(`https://api.github.com/users/${userId}/repos`);

export const getOrganization = async (userId) =>
  await axios.get(`https://api.github.com/users/${userId}/orgs`);

export const getFollowers = async (userId) =>
  await axios.get(`https://api.github.com/users/${userId}/followers`);
