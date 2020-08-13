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
