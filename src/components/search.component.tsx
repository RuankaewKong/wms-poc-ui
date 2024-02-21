'use client';
import React, { useState } from 'react';
interface Header {
  key: string;
  label: string;
}

interface Test<T> {
  data: T[]; // Use the Product type here
  headers:Header[];
  // onSearch: (results: any) => void;
}
type Props = {

}

const SearchComponent = <T extends Record<string, any>>({ data ,headers}: Test<T>) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<T[]>(data);
  console.log(data);

  // console.log("searchResults :"+setSearchResults);

  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setSearchResults(filteredResults);
  };
  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableData = () => {
    return (
      <tbody>
        {searchResults.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header.key}>{item[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };


  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px', cursor: 'pointer' }}>
        Search
      </button>

      {searchResults.length > 0 ? (
        <table style={{ marginTop: '10px' }}>
          {renderTableHeader()}
          {renderTableData()}
        </table>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchComponent;
