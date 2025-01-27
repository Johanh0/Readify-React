export async function searchQuery(query) {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/ebook/${query}`);

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {}
}
