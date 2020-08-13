import { API } from "../../backend";

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createQuote = (userId, token, quote) => {
  return fetch(`${API}quote/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(quote),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
