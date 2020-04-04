import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from "react-router-dom";


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Cyber Rubber Ducks
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function LoginBox(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const sentences = ["Tenter de se connecter", "Essayez encore", "Coin", "Incroyable, ça marche !"];

    let history = useHistory();


    const handleLogin = () => {
        setCount(count + 1);
        if(count === sentences.length - 2){
            handleSubmit();
        }
    }

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = () => {
        axios.post('https://cyberrubberducks-webapps.azurewebsites.net/api/Jwt', {
            'email':email,
            'password':password
        })
        .then(res => {
            console.log(res);
            let token = res.data['access_Token'];
            localStorage.setItem("token", token);
            const data = jwt_decode(token);
            localStorage.setItem("name", data["name"]);
            localStorage.setItem("firstName", data["firstName"]);
            history.push("/account");
        })
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Courriel"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember Me (w/o R. Pattinson)"
          />
          <Button
            //type="submit"
            fullWidth
            id="loginBtn"
            variant="contained"
            color="primary"
            disabled={!validateForm()}
            onClick={()=>handleLogin()}
            className={classes.submit}
          >
            {sentences[count]}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                J'ai oublié mon mot de passe
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"J'ai omis de m'inscrire"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
