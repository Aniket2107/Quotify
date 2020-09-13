import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getAllCategories = () => {
  return fetch(`${API}categories`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getCategoryById = (catId) => {
  return fetch(`${API}category/${catId}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const deleteCategory = (userId, token, catId) => {
  return fetch(`${API}category/delete/${catId}/${userId}`, {
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

export const updateCategory = (userId, token, catId, category) => {
  fetch(`${API}category/update/${catId}/${userId}`, {
    method: "PUT",
    headers: {
      headers: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getAllUsers = (userId, token) => {
  return fetch(`${API}users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (userId, token, delId) => {
  return fetch(`${API}user/${userId}/${delId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const deleteQuote = (userId, token, quoteId) => {
  return fetch(`${API}quote/delete/${quoteId}/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
