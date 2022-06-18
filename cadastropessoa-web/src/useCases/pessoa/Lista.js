import React, { useEffect } from "react";
import { api } from "../../configuration/api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Lista() {
  const [pessoas, setPessoas] = React.useState([]);

  useEffect(() => {
    api
      .get("/pessoa", { auth: { username: "usuario", password: "senha" } })
      .then((response) => setPessoas(response.data));
  }, []);

  function remover(id) {
    api.delete(`/pessoa/${id}`, {
      auth: { username: "usuario", password: "senha" },
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Data de Nascimento</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Naturalidade</TableCell>
            <TableCell>Nacionalidade</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pessoas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.cpf}</TableCell>
              <TableCell>{row.sexo}</TableCell>
              <TableCell>{row["data-nascimento"]}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.naturalidade}</TableCell>
              <TableCell>{row.nacionalidade}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" onClick={() => remover(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Lista;
