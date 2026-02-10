import SearchBar from "./SearchBar";

export default function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Implement your search logic here
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

//