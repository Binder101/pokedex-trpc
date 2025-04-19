
import { FC, useState } from 'react';
import { Box, TextField, Button, CircularProgress,Typography } from '@mui/material';
import { trpc } from '../utils/trpc';
import { PokemonRow } from './PokemonRow';

export const SinglePokemonForm: FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [searchName, setSearchName] = useState<string | null>(null);
  
  const { data: pokemon, isLoading, error } = trpc.pokemon.getByName.useQuery(
    searchName || '', 
    { enabled: !!searchName }
  );
  function capitalizeWords(str : string) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchQuery = capitalizeWords(pokemonName);
    console.log(searchQuery);
    setSearchName(searchQuery);
  };
  
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Pokemon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">Error: {error.message}</Typography>}
      {pokemon && <PokemonRow pokemon={pokemon} />}
    </Box>
  );
};
