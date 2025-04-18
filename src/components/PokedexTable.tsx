// components/PokedexTable.tsx
import { FC, useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Avatar, Chip, TablePagination
} from '@mui/material';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokedexTableProps {
  pokemons: Pokemon[];
}

export const PokedexTable: FC<PokedexTableProps> = ({ pokemons }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const displayedPokemons = pokemons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Sprite</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Types</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedPokemons.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell>{pokemon.id}</TableCell>
              <TableCell>
                <Avatar src={pokemon.sprite} alt={pokemon.name} />
              </TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>
                {pokemon.types.map((type) => (
                  <Chip key={type} label={type} size="small" sx={{ mr: 0.5 }} />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={pokemons.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
  </>
  );
};
