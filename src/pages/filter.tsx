import { FilterablePokedexTable } from "../components/FilterablePokedexTable";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

function FilterablePokemonPage() {
  const router = useRouter();

  const handleClickMultiple = () => {
    router.push("/multiple");
  };

  const handleClickIndex = () => {
    router.push("/");
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Box
          display="flex"
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          mb={1}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ mb: { xs: 2, sm: 0 } }}
          >
            Filterable Pokemon Table
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              onClick={handleClickMultiple}
              fullWidth={true}
            >
              Multiple Lookup
            </Button>
            <Button
              variant="contained"
              onClick={handleClickIndex}
              fullWidth={true}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <FilterablePokedexTable />
      </Box>
    </Container>
  );
}

export default trpc.withTRPC(FilterablePokemonPage);
