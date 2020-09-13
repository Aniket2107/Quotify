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

export const updateUser = (userId, token, userBody) => {
  return fetch(`${API}user/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userBody),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

<<<<<<< HEAD
export const getUserCred = (userId, token) => {
  return fetch(`${API}user/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

=======
>>>>>>> bb7299436dd890e6973cac064b10e259437855a9
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

export const deleteQuote = (userId, token, quoteId) => {
  return fetch(`${API}quote/delete/${quoteId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const updateQuote = (userId, token, quoteId, quoteBody) => {
  return fetch(`${API}quote/update/${quoteId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(quoteBody),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserFavourite = (userId, token) => {
  return fetch(`${API}favourites/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const delUserFavourite = (userId, token, favId) => {
<<<<<<< HEAD
  return fetch(`${API}favourite/remove/${favId}/${userId}`, {
=======
  return fetch(`${API}favourite/remove/${userId}/${favId}`, {
>>>>>>> bb7299436dd890e6973cac064b10e259437855a9
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
<<<<<<< HEAD
=======

export default delUserFavourite;
>>>>>>> bb7299436dd890e6973cac064b10e259437855a9
