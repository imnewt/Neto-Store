// import React, { Component } from 'react';
// import { CartContext } from "../contexts/Cart";
// import {
//   Spinner,
//   Container,
//   Row,
//   Col
// } from "reactstrap";

// import axios from "axios";

// import './Books.css';

// export default class Books extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isCompleted: true,
//       books: []
//     }
//   }
  
//   componentDidMount() {
//     setTimeout( () => {
//       this.callApi();
//     }, 500);
    
//   }

//   callApi = () => {
//     fetch('/api/books')
//       .then(res => res.json())
//       .then(json => {
//         if(json.success) {
//           this.setState({
//             isCompleted: false,
//             books: json.message
//           })
//         }
//       });
//   }

//   render() {
//     const { books, isCompleted } = this.state;
//     return (
//       <Container>
//         {
//           isCompleted && (
//             <div className="spin">
//               <Spinner size="xl" type="grow" color="primary" />
//               <Spinner size="xl" type="grow" color="secondary" />
//               <Spinner size="xl" type="grow" color="success" />
//               <Spinner size="xl" type="grow" color="danger" />
//             </div>
//           )
//         }
//         <Row>
//           {
//             books.map( (book, index) => (
//              <Col key={index} sm="4" className="pt-3">
//                     <div className="card">
//                         <div className="card__top">
//                           <img className="card-img-top" src={book.imageUrl} width="100%" alt="image"/>
//                         </div>
//                         <div className='card__bottom'>
//                           <h4 className="card__h4">{book.name}</h4>
//                           <div className="position-absolute w-100 d-flex justify-content-center top-50 elem-hover transition">
//                               <CartContext.Consumer>
//                                 {({ addToCart }) => (
//                                     <button className="cate-btn" onClick={() => addToCart(book)}>
//                                     Add To Cart
//                                     </button>
//                                 )}
//                               </CartContext.Consumer>
//                           </div>
//                         </div>
//                     </div>
//                 </Col>   
//             ))}
//         </Row>
//       </Container>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CartContext } from '../contexts/Cart';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: 'center',
    height: '50vh',
    alignItems: 'center'
  },
  card: {
    maxWidth: 345,
    boxShadow: `6px 10px 10px 5px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`
  },
  media: {
    height: 0,
    backgroundSize: 'contain',
    paddingTop: '80%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[300],
  },
  text: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: `13.5rem`
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [books, setBooks] = useState([]);
  const [isCompleted, setIsCompleted] = useState(true);

  useEffect(() => {
    _handleCallApi();
  })

  const _handleCallApi = () => {
    setTimeout(() => {
      fetch('/api/books')
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          setIsCompleted(false);
          setBooks(json.message);
        }
      });
    }, 500);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };

  return (
    <Container className='mt-5'>
      <>{
        isCompleted && (
          <div className={classes.root}>
            <CircularProgress color="secondary" />
          </div>
        )
      }</>
      <Grid container spacing={3}>
        {
          books.map( (book, index) => (
            <Grid item key={index} sm="4" className="pt-3">
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={<Box className={classes.text}>{book.name}</Box>}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={book.imageUrl}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {book.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <CartContext.Consumer>
                      {
                        ({ addToCart }) => (
                          <IconButton onClick={() => addToCart(book)} aria-label="add to cart">
                            <ShoppingCartIcon/>
                          </IconButton>
                        )
                      }
                    </CartContext.Consumer>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Description</Typography>
                      <Typography paragraph>
                        {book.description}
                      </Typography>
                      {/* <Typography paragraph>
                      </Typography>
                      <Typography paragraph>
                      </Typography>
                      <Typography>
                      </Typography> */}
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>   
            )
          )
        }
      </Grid>
    </Container>
  );
}