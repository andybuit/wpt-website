import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import FBButton from "../widgets/buttons/fb-button";
import GoogleButton from "../widgets/buttons/google-button";
import SignUpButton from "../widgets/buttons/signup-button";
import LoginButton from "../widgets/buttons/login-button";
import { useState } from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";

enum Step {
  Default,
  Login,
  SignUp
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "255px", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    height: "40px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  agreediv: {
    fontSize: "10px",
    marginTop: "5px",
    lineHeight: "15px",
    textAlign: "center",
    color: "rgb(72, 99, 111)",
    width: "244px"
  },
  forgetPW: {
    cursor: "pointer",
    color: "rgb(72, 99, 111)",
    textAlign: "right",
    fontSize: 11,
    position: "relative",
    // transform: "translate(-50%, 0px)",
    right: -160,
    // top: 10,
    textDecoration: "underline"
  },
  hrdiv: {
    width: "249px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: "26px 0px 16px",
    "& div": {
      position: "absolute",
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(126, 154, 166)",
      fontSize: "16px",
      fontWeight: 400,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      padding: "4px 18px"
    },
    "& hr": {
      width: "100%",
      borderBottom: "0px solid rgb(126, 154, 166"
    }
  }
}));

function renderDefault(
  classes: any,
  setStep: React.Dispatch<React.SetStateAction<Step>>
) {
  return (
    <>
      <Box m={3}>
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>
      </Box>
      <FBButton text="Sign up with Facebook" />
      <GoogleButton text="Sign up with Google" />
      <SignUpButton onClick={() => setStep(Step.SignUp)} text="Sign up With Email" />
      <Grid className={classes.hrdiv}>
        <hr />
        <div>or</div>
      </Grid>
      <LoginButton onClick={() => setStep(Step.Login)} text="Login" />
      <Grid className={classes.agreediv}>
        By clicking 'Sign up with Facebook' or 'Sign up with Google' you agree
        to the
        <a target="_blank" href="/terms" rel="noopener noreferrer">
          &nbsp;Terms of Use&nbsp;
        </a>
        and
        <a target="_blank" href="/privacy_policy" rel="noopener noreferrer">
          &nbsp;Privacy Policy
        </a>
      </Grid>
    </>
  );
}

function renderLogin(
  classes: any,
  setStep: React.Dispatch<React.SetStateAction<Step>>
) {
  return (
    <>
      <Box alignSelf="flex-start">
        <ArrowBack onClick={() => setStep(Step.Default)} />
      </Box>
      <Box m={0}>
        <Typography component="h1" variant="h6">
          Login
        </Typography>
      </Box>
      <form className={classes.form} noValidate>
        <TextField
          required
          margin="dense"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          required
          margin="dense"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Box mt={1}>
          <LoginButton onClick={() => setStep(Step.Login)} text="Login" />
        </Box>
        <Grid>
          <Link href="#" className={classes.forgetPW}>
            Forgot password?
          </Link>
        </Grid>
        <Grid className={classes.hrdiv}>
          <hr />
          <div>or</div>
        </Grid>
        <FBButton text="Login with Facebook" />
        <GoogleButton text="Login with Google" />
        <Grid className={classes.agreediv}>
          By clicking 'Login','Login with Facebook' or 'Login with Google' you
          agree to the
          <a target="_blank" href="/terms" rel="noopener noreferrer">
            &nbsp;Terms of Use&nbsp;
          </a>
          and
          <a target="_blank" href="/privacy_policy" rel="noopener noreferrer">
            &nbsp;Privacy Policy
          </a>
        </Grid>
      </form>
    </>
  );
}

function renderSignUp(
  classes: any,
  setStep: React.Dispatch<React.SetStateAction<Step>>
) {
  return (
    <>
      <Box alignSelf="flex-start">
        <ArrowBack onClick={() => setStep(Step.Default)} />
      </Box>
      <Box m={0}>
        <Typography component="h1" variant="h6">
          Sign Up
        </Typography>
      </Box>
      <form className={classes.form} noValidate>
        <TextField
          required
          margin="dense"
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoFocus
        />
        <TextField
          required
          margin="dense"
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoFocus
        />
        <TextField
          required
          margin="dense"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          required
          margin="dense"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Box mt={1}>
          <LoginButton onClick={() => setStep(Step.Login)} text="Sign Up" />
        </Box>
        <Grid className={classes.agreediv}>
          By clicking 'Sign Up' you agree to the
          <a target="_blank" href="/terms" rel="noopener noreferrer">
            &nbsp;Terms of Use&nbsp;
          </a>
          and
          <a target="_blank" href="/privacy_policy" rel="noopener noreferrer">
            &nbsp;Privacy Policy
          </a>
        </Grid>
      </form>
    </>
  );
}

export default function SignInUp() {
  const [step, setStep] = useState(Step.Default);
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {step == Step.Default && renderDefault(classes, setStep)}
          {step == Step.Login && renderLogin(classes, setStep)}
          {step == Step.SignUp && renderSignUp(classes, setStep)}
        </div>
      </Grid>
    </Grid>
  );
}
