// pages/index.tsx
import { SinglePokemonForm } from '../components/SinglePokemonForm';
import { Box, Typography, Container } from '@mui/material';
import { trpc } from '@/utils/trpc';

function SinglePokemonPage() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pokemon Lookup
        </Typography>
        <SinglePokemonForm />
      </Box>
    </Container>
  );
}

export default trpc.withTRPC(SinglePokemonPage);