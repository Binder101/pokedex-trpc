// pages/index.tsx
import { SinglePokemonForm } from '../components/SinglePokemonForm';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { trpc } from '@/utils/trpc';
import { useRouter } from 'next/router';

function SinglePokemonPage() {
  const router = useRouter();

  const handleClickMultiple = () => {
    router.push('/multiple');  
  }

  const handleClickFilter = () => {
    router.push('/filter');
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Box
          display="flex"
          alignItems={{ xs: 'stretch', sm: 'center' }}
          justifyContent="space-between"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={2} // spacing between heading and buttons on small screens
          mb={3}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ mb: { xs: 2, sm: 0 } }} // margin below heading on mobile
          >
            Pokemon Lookup
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              onClick={handleClickMultiple}
              fullWidth={true}
            >
              Multiple Lookup
            </Button>
            <Button
              variant="contained"
              onClick={handleClickFilter}
              fullWidth={true}
            >
              Filter By Type
            </Button>
          </Stack>
        </Box>
        <SinglePokemonForm />
      </Box>
    </Container>

  );
}

export default trpc.withTRPC(SinglePokemonPage);