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
import EditIcon from "@mui/icons-material/Edit";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import InputMask from "react-input-mask";

function Lista() {
  const navigate = useNavigate();

  function cadastrar() {
    navigate("/form-pessoa");
  }

  const [pessoas, setPessoas] = React.useState([]);

  const [pessoa, setPessoa] = React.useState({
    id: "",
    nome: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    naturalidade: "",
    nacionalidade: "",
  });

  function handlePessoa(field, event) {
    setPessoa({ ...pessoa, [field]: event.target.value });
  }

  function getPessoas() {
    api
      .get("/pessoa", { auth: { username: "usuario", password: "senha" } })
      .then((response) => setPessoas(response.data));
  }

  useEffect(() => {
    getPessoas();
  }, []);

  function remover(id) {
    api
      .delete(`/pessoa/${id}`, {
        auth: { username: "usuario", password: "senha" },
      })
      .then(() => getPessoas());
  }

  function alterar() {
    api
      .put("/pessoa", pessoa, {
        auth: {
          username: "usuario",
          password: "senha",
        },
      })
      .then(() => {
        handleClose();
        getPessoas();
      });
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (pessoa) => {
    setOpen(true);
    setPessoa(pessoa);
  };
  const handleClose = () => setOpen(false);

  return (
    <TableContainer component={Paper}>
      <AppBar position="static" fullWidth>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Listagem de Pessoa
          </Typography>
          <Button color="inherit" onClick={() => cadastrar()}>
            Cadastrar
          </Button>
        </Toolbar>
      </AppBar>
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
              <TableCell>{row.dataNascimento}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.naturalidade}</TableCell>
              <TableCell>{row.nacionalidade}</TableCell>
              <TableCell>
                <IconButton aria-label="edit" onClick={() => handleOpen(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => remover(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Container component="main" maxWidth="xs">
            <Box sx={style}>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="nome"
                      required
                      fullWidth
                      id="nome"
                      label="Nome"
                      autoFocus
                      value={pessoa.nome}
                      onChange={(e) => handlePessoa("nome", e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <InputMask
                      mask="999.999.999-99"
                      disabled={false}
                      maskChar=" "
                      value={pessoa.cpf}
                      onChange={(e) => handlePessoa("cpf", e)}
                    >
                      {() => <TextField label="CPF" required fullWidth />}
                    </InputMask>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      id="dataNascimento"
                      label="Data de Nascimento"
                      name="data-nascimento"
                      type="date"
                      value={pessoa.dataNascimento}
                      onChange={(e) => handlePessoa("dataNascimento", e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="label-sexo" required>
                        Sexo
                      </InputLabel>
                      <Select
                        labelId="label-sexo"
                        id="sexo"
                        value={pessoa.sexo}
                        label="Sexo"
                        name="sexo"
                        onChange={(e) => handlePessoa("sexo", e)}
                      >
                        <MenuItem value={"M"}>Masculino</MenuItem>
                        <MenuItem value={"F"}>Feminino</MenuItem>
                        <MenuItem value={"O"}>Outros</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="E-mail"
                      name="email"
                      autoComplete="email"
                      value={pessoa.email}
                      onChange={(e) => handlePessoa("email", e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="naturalidade"
                      label="Naturalidade"
                      id="naturalidade"
                      value={pessoa.naturalidade}
                      onChange={(e) => handlePessoa("naturalidade", e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="nacionalidade"
                      label="Nacionalidade"
                      id="nacionalidade"
                      value={pessoa.nacionalidade}
                      onChange={(e) => handlePessoa("nacionalidade", e)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => alterar()}
                >
                  Alterar
                </Button>
              </Box>
            </Box>
          </Container>
        </Modal>
      </div>
    </TableContainer>
  );
}

export default Lista;
