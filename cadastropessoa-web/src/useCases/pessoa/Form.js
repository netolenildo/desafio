import React from "react";
import { api } from "../../configuration/api";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import InputMask from "react-input-mask";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  function listar() {
    navigate("/");
  }

  const [pessoa, setPessoa] = React.useState({
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

  function cadastrar() {
    api.post("/pessoa", pessoa, {
      auth: { username: "usuario", password: "senha" },
    });

    listar();
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
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
            Cadastro de Pessoa
          </Typography>
          <Button color="inherit" onClick={() => listar()}>
            Listar
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
                  onChange={(e) => handlePessoa("nome", e)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputMask
                  mask="999.999.999-99"
                  disabled={false}
                  maskChar=" "
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
                  onChange={(e) => handlePessoa("email", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="naturalidade"
                  label="Naturalidade"
                  id="naturalidade"
                  onChange={(e) => handlePessoa("naturalidade", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="nacionalidade"
                  label="Nacionalidade"
                  id="nacionalidade"
                  onChange={(e) => handlePessoa("nacionalidade", e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => cadastrar()}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Form;
