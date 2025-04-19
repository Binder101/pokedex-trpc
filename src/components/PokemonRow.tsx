
import { FC } from 'react';
import { Box, Typography, Chip, Avatar } from '@mui/material';

interface PokemonRowProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
}

export const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <Box display="flex" alignItems="center" p={2} borderBottom="1px solid #eee">
      <Box mr={2}>
        <Avatar src={pokemon.sprite} alt={pokemon.name} sx={{ width: 56, height: 56 }} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h6">{pokemon.name}</Typography>
        <Typography variant="body2" color="textSecondary">ID: {pokemon.id}</Typography>
        <Box mt={1}>
          {pokemon.types.map((type) => (
            <Chip key={type} label={type} size="small" sx={{ mr: 0.5 }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
