"use strict"

export async function postData(url, data) {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": 'application/json'
    },
    body: data
  });
  return await response.json();
};

export async function putData(url, data) {
  let response = await fetch(url, {
    method: 'PUT',
    headers: {
      "Content-type": 'application/json'
    },
    body: data
  });
  return await response.json();
};
