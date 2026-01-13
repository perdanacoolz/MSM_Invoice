// src/lib/api.ts
const API = "https://msm.dvns.my.id/Customer";

export const getProducts = () =>
  fetch(API).then(res => res.json());

export const createProduct = (data) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const updateProduct = (id, data) =>
  fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, id })
  });

export const deleteProduct = (id) =>
  fetch(`${API}/${id}`, { method: "DELETE" });
