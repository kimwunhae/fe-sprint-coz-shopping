export function get(url, queries) {
  if (queries) {
    const queryStrings = Object.entries(queries)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    url = `${url}?${queryStrings}`;
  }

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  });
}
