const BackendBaseUrl = "http://localhost:8000/api/";

export const fetchPost = (path, body) =>
  fetch(BackendBaseUrl + path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    const jsonData = response.json();
    if (response.ok) {
      return jsonData;
    } else {
      throw new Error("API Error");
    }
  });
