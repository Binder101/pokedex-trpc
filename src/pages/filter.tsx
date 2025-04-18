// pages/filter.tsx
import { FilterablePokedexTable } from '../components/FilterablePokedexTable';
import { Box, Typography, Container } from '@mui/material';

export default function FilterablePokemonPage() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Filterable Pokemon Table
        </Typography>
        <FilterablePokedexTable />
      </Box>
    </Container>
  );
}
