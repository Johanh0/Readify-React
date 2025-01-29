export async function searchQuery(query) {
  try {
    const response = await fetch(`/api/v1/ebook/${query}`);

    if (!response.ok) {
      console.error(`Error: ${response.statusText}`);
      return { error: `Failed to fetch data: ${response.statusText}` };
    }

    const data = await response.json();

    if (!data.results) {
      console.error("No results found.");
      return { error: "No results found" };
    }
    return data.results;
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    return { error: "An error occurred while fetching data." };
  }
}
