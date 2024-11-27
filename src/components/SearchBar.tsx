import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Поиск по названию"
      onChange={(e) => onSearch(e.target.value)}
      fullWidth
      size="medium"
      style={{ marginBottom: '16px', borderColor: '#333' }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBar;
