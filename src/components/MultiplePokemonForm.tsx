// components/MultiplePokemonForm.tsx
import { FC, useState } from 'react';
import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material';
import { trpc } from '../utils/trpc';
import { PokedexTable } from './PokedexTable';

export const MultiplePokemonForm: FC = () => {
  const [pokemonNames, setPokemonNames] = useState('');
  const [searchNames, setSearchNames] = useState<string[] | null>(null);
  
  const { data: pokemons, isLoading, error } = trpc.pokemon.getByNames.useQuery(
    searchNames || [], 
    { enabled: !!searchNames && searchNames.length > 0 }
  );
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const names = pokemonNames.split(',').map(name => name.trim()).filter(Boolean);
    setSearchNames(names);
  };
  
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Pokemon Names (comma-separated)"
          value={pokemonNames}
          onChange={(e) => setPokemonNames(e.target.value)}
          margin="normal"
          fullWidth
          helperText="E.g., Bulbasaur, Charmander, Squirtle"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">Error: {error.message}</Typography>}
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </Box>
  );
};
