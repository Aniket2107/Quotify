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

export const createProduct = (userId, token, quotePost) => {
  return fetch(`${API}/quote/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: quotePost,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
