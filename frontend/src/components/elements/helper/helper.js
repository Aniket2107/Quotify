import { API } from "../../../backend";

export const getAllQuotes = () => {
  return fetch(`${API}quotes`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getQuoteById = (quoteId) => {
  return fetch(`${API}quote/${quoteId}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getQuoteByCategory = (categoryId) => {
  return fetch(`${API}quotes/category/${categoryId}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const createFavourite = (userId, token, favourite) => {
  return fetch(`${API}favourite/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(favourite),
  });
};
