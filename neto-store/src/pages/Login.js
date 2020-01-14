import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Neto from '../images/logo.jpg';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
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
    }
}));

export default function Login() {
    const classes = useStyles();

    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/allowances")
    //         .then(data => {
    //         return data.json();
    //         })
    //         .then(data => {
    //         setAllowances(data);
    //         })
    //         .catch(err => {
    //         console.log(123123);
    //         });
    // }, []);

    const _handleOnLogin = () => {
        console.log('Hello');
    }

    return (
        <Container maxWidth='sm'>
            <Paper className={classes.background} elevation={3}>
                <Typography className={classes.text} variant="h6" component="h2">
                    <img src={Neto} height={64} width={128}/>
                </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                    Đăng Nhập
                </Typography>
                <Typography className={classes.text} component="h2">
                    Sử dụng tài khoản NetoStore của bạn
                </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Username" />
                    <TextField 
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password" 
                    />
                </form>
                <Grid container>
                    <Grid className={classes.space} item xs={12} md={6}>
                        <Link to='/'>
                            <Typography className={classes.text} component="h2">
                                Bạn quên mật khẩu ?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid className={classes.space} item xs={12} md={6}>
                        <Link to='/'>
                            <Typography className={classes.text} component="h2">
                                Bạn chưa có tài khoản ?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid className={classes.text} item xs={12} md={12}>
                        <Button onClick={_handleOnLogin} className={classes.btn} variant="contained" color="primary">Đăng nhập</Button>
                    </Grid>
                </Grid>
                
            </Paper>
        </Container>
    )
}