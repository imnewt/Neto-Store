import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Neto from '../images/logo.jpg';
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 16,
    },
    root: {
        '& > *': {
        margin: theme.spacing(2),
        width: 200,
        },
        display: 'inline-flex',
        flexDirection: "column",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        marginBottom: `10px`
    },
    background: {
        backgroundColor: `#f8f9fa`,
        padding: `16px 0`
    },
    btn: {
        width: `50%`,
        backgroundColor: '#1976d2',
        padding: `0.6rem 1.5rem`,
        alignSelf: 'center'
    },
    space: {
        margin: `10px 0px`
    },
    input: {
        width: `60%`
    },
    textError: {
        color: 'red',
        textAlign: 'center',
        marginBottom: `10px`,
        width: `100%`
    }
}));

export default function Login(props) {
    const classes = useStyles();
    const { history } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ic, setIc] = useState('');
    const [error, setError] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorAddress, setErrorAddress] = useState(false);
    const [errorIc, setErrorIc] = useState(false);

    const _handlOnSignUp = () => {
        fetch('/api/account/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                address,
                ic
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                setError(json.message);
                history.push('/api/account/signin');
            } else {
                setError(json.message);
                setErrorEmail(json.errorEmail || false);
                setErrorName(json.errorName || false);
                setErrorPassword(json.errorPassword || false);
                setErrorAddress(json.errorAddress || false);
                setErrorPhone(json.errorPhone || false);
                setErrorIc(json.errorIc || false);
            }
        })
    }

    return (
        <Container className={classes.container} maxWidth='sm'>
            <Paper className={classes.background} elevation={3}>
                <Typography className={classes.text} variant="h6" component="h2">
                    <img src={Neto} height={64} width={128} alt="error"/>
                </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                    Đăng Ký
                </Typography>
                <Typography className={classes.text} component="h2">
                    Đăng ký làm thành viên của Neto nhé
                </Typography>
                <div className={classes.root} autoComplete="on">
                    <>{ error && <Typography className={classes.textError} component="h5">{error}</Typography> }</>
                    <TextField error={errorName} className={classes.input} name='name' onChange={event => setName(event.target.value)} value={name} id="standard-basic" label="Name" required={true}/>
                    <TextField error={errorEmail} className={classes.input} name='email' onChange={event => setEmail(event.target.value)} value={email} id="standard-basic" label="email" required={true}/>
                    <TextField 
                        error={errorPassword}
                        className={classes.input}
                        name='password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                    />
                    <TextField error={errorPhone} className={classes.input} name='phone' onChange={event => setPhone(event.target.value)} value={phone} id="standard-basic" label="Phone" required={true}/>
                    <TextField error={errorAddress} className={classes.input} name='address' onChange={event => setAddress(event.target.value)} value={address} id="standard-basic" label="Address"/>
                    <TextField error={errorIc} className={classes.input} name='ic' onChange={event => setIc(event.target.value)} value={ic} id="standard-basic" label="Identity card" required={true}/>
                    <Button onClick={_handlOnSignUp} className={classes.btn} variant="contained" type='submit' color="primary">Đăng ký</Button>
                </div>
            </Paper>
        </Container>
    )
}