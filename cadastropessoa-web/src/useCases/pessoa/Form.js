import React from "react";
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

function Form() {
  const theme = createTheme();

  const [sexo, setSexo] = React.useState("");

  const [cpf, setCpf] = React.useState("");

  const handleChange = (event) => {
    setSexo(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
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
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputMask
                  mask="999.999.999-99"
                  value={cpf}
                  disabled={false}
                  maskChar=" "
                  onChange={(e) => setCpf(e.target.value)}
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
                    value={sexo}
                    label="Sexo"
                    name="sexo"
                    onChange={handleChange}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="naturalidade"
                  label="Naturalidade"
                  id="naturalidade"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="nacionalidade"
                  label="Nacionalidade"
                  id="nacionalidade"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
