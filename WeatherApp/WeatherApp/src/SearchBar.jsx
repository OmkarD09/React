export default function SearchBar({ onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value;
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" placeholder="Enter city name" />
            <button type="submit">Search</button>
        </form>
    );
}