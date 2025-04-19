
import { FC, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { PokemonTypeSelection } from './PokemonTypeSelection';
import { PokedexTable } from './PokedexTable';
import { trpc } from '../utils/trpc';

export const FilterablePokedexTable: FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  
  const { data: allTypes, isLoading: typesLoading } = trpc.pokemon.getAllTypes.useQuery();
  
  const { data: pokemons, isLoading: pokemonsLoading } = trpc.pokemon.getByType.useQuery(selectedType);
  
  const isLoading = typesLoading || pokemonsLoading;
  
  if (isLoading) {
    return <CircularProgress />;
  }
  
  if (!allTypes) {
    return <Typography color="error">Failed to load Pokemon types</Typography>;
  }
  
  return (
    <Box>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
        types={allTypes ?? []}
      />
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </Box>
  );
};
