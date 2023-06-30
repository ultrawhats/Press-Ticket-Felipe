import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Link
} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import { system } from "../../config.json";
import { systemVersion } from "../../../package.json";
import logo from '../../assets/logo.png';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundImage: "../../assets/fundo-login.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  paper: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "55px 30px",
    borderRadius: "12.5px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  powered: {
    color: "white"
  }
}));




const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = e => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div>
            <img style={{ margin: "0 auto", height: "80px", width: "100%" }} src={logo} alt="Whats" />
          </div>
          <Typography component="h1" variant="h5">
            {i18n.t("login.title")}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handlSubmit}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label={i18n.t("login.form.email")}
              name="email"
              value={user.email}
              onChange={handleChangeInput}
              autoComplete="email"
              autoFocus
            />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label={i18n.t("login.form.password")}
            id="password"
            value={user.password}
            onChange={handleChangeInput}
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((e) => !e)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          /> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {i18n.t("login.buttons.submit")}
            </Button>
            {/* <Grid container>
						<Grid item>
							<Link
								href="#"
								variant="body2"
								component={RouterLink}
								to="/signup"
							>
								{i18n.t("login.buttons.register")}
							</Link>
						</Grid>
					</Grid> */}
          </form>

          <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href={system.url}>
              {system.name} - CNPJ: 41.682.911/0001-23
              <br></br>
              Todos os direitos reservados - <b>v{systemVersion}</b>
              <br></br>
              © 2021 - {new Date().getFullYear()}
            </Link>
            {"."}
          </Typography>
        </div>
        <br />
      </Container>
    </div>
  );
};

export default Login;