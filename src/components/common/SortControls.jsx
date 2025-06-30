const SortControls = ({ sortBy, sortOrder, onSort }) => {
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'rating', label: 'Rating' },
    { value: 'prepTimeMinutes', label: 'Prep Time' },
    { value: 'cookTimeMinutes', label: 'Cook Time' }
  ];

  const handleSortChange = (e) => {
    const field = e.target.value;
    onSort(field, sortOrder);
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    onSort(sortBy, newOrder);
  };

  return (
    <div className="sort-controls">
      <select value={sortBy} onChange={handleSortChange}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
      </button>
    </div>
  );
};

export default SortControls;