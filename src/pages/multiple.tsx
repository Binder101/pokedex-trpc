// pages/multiple.tsx
import { MultiplePokemonForm } from '../components/MultiplePokemonForm';
import { Box, Typography, Container } from '@mui/material';

export default function MultiplePokemonPage() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Multiple Pokemon Lookup
        </Typography>
        <MultiplePokemonForm />
      </Box>
    </Container>
  );
}
