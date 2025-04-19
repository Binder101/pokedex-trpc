import { MultiplePokemonForm } from "../components/MultiplePokemonForm";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

function MultiplePokemonPage() {
  const router = useRouter();

  const handleClickFilter = () => {
    router.push("/filter");
  };

  const handleClickIndex = () => {
    router.push("/");
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          gap={2}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ mb: { xs: 2, sm: 0 } }}
          >
            Multiple Pokemon Lookup
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button variant="contained" onClick={handleClickFilter} fullWidth>
              Filter By Type
            </Button>
            <Button variant="contained" onClick={handleClickIndex} fullWidth>
              Search
            </Button>
          </Stack>
        </Box>
        <MultiplePokemonForm />
      </Box>
    </Container>
  );
}
export default trpc.withTRPC(MultiplePokemonPage);
