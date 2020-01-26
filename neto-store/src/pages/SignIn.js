// import React, { Component } from 'react';
// //import { Link } from "react-router-dom";
// //import { getFromStorage, setInStorage } from '../utils/storage';
// import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';


// export default class Login extends Component {
//     state = {
//         username: '',
//         password: '',
//         error: ''
//     }


//     // GET và POST data bằng form
//     // componentDidMount() {
//     //     if(this.getQueryParam('error')){
//     //         console.log('ERROR')
//     //     }else{
//     //         console.log('NO ERROR')
//     //     }
//     // }

//     // getQueryParam(field){
//     //     var url = window.location.href;
//     //     if(url.indexOf('?' + field + '=') !== -1)
//     //         return true;
//     //     else if(url.indexOf('&' + field + '=') !== -1)
//     //         return true;
//     //     return false
//     // }

//     // GET và POST data bằng hàm
//     componentDidMount() {

//     }

//     render() {
//         const { username, password } = this.state;
//         return (
//             <Container>
//                 <Form>
//                     <FormGroup>
//                         <Label for="username">Username</Label>
//                         <Input onChange={(event) => this.setState({username: event.target.value})} value={username} type="username" name="username" id="username" placeholder="Username" required maxLength="10"/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="examplePassword">Password</Label>
//                         <Input onChange={(event) => this.setState({password: event.target.value})} value={password} type="password" name="password" id="examplePassword" placeholder="Password" required/>
//                     </FormGroup>
//                     <Button color="primary" size='md'>Đăng nhập</Button>
//                 </Form>
//             </Container>
//         )
//     }
// }



import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Neto from '../images/logo.jpg';
import { setInStorage } from '../utils/storage';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 16
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
        backgroundColor: `#f8f9fa`
    },
    btn: {
        width: `50%`,
        backgroundColor: '#1976d2',
        padding: `0.6rem 1.5rem`,
    },
    space: {
        margin: `10px 0px`
    },
    textError: {
        color: 'red',
        textAlign: 'center',
        marginBottom: `10px`
    }
}));

export default function Login(props) {
    const classes = useStyles();
    const { history } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    // useEffect(() => {
    //     refreshPage();
    // })

    const refreshPage = () => {
        history.push('/');
        window.location.reload(false);
    }

    const _handleSignIn = async () => {
        await fetch('/api/account/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                console.log(json);
                setInStorage('tokenId', json.token);
                setError(json.message);
                refreshPage();
            } else {
                setError(json.message);
                setErrorEmail(json.errorEmail || false);
                setErrorPassword(json.errorPassword || false);
            }
        })
    }

    return (
        <Container className={classes.container} maxWidth='sm'>
            <Paper className={classes.background} elevation={3}>
                <Typography className={classes.text} variant="h6" component="h2">
                    <img src={Neto} height={64} width={128} alt="Error"/>
                </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                    Đăng Nhập
                </Typography>
                <Typography className={classes.text} component="h2">
                    Sử dụng tài khoản NetoStore của bạn
                </Typography>
                <div className={classes.root} autoComplete="on">
                    <>{error && <Typography className={classes.textError} component="h5">
                        {error}
                    </Typography>}</>
                    <TextField error={errorEmail} name='email' onChange={event => setEmail(event.target.value)} value={email} id="standard-basic" label="email" />
                    <TextField 
                        error={errorPassword}
                        name='password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password" 
                    />
                    <Button onClick={_handleSignIn} className={classes.btn} variant="contained" color="primary">Đăng nhập</Button>
                </div>
                <Grid container>
                    <Grid className={classes.space} item xs={12} md={6}>
                        <Link to='/'>
                            <Typography className={classes.text} component="h2">
                                Bạn quên mật khẩu ?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid className={classes.space} item xs={12} md={6}>
                        <Link to='/api/account/signup'>
                            <Typography className={classes.text} component="h2">
                                Bạn chưa có tài khoản ?
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}