
import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

export interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
  types: string[];
}

export const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = ({ 
  selectedType, 
  selectType,
  types
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    selectType(value === 'all' ? undefined : value);
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>Pokemon Type</InputLabel>
      <Select
        value={selectedType || 'all'}
        onChange={handleChange}
        label="Pokemon Type"
      >
        <MenuItem value="all">All Types</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
