import React , { useEffect } from 'react';
import {Container, Grid, Grow, Paper,} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { getPosts } from '../../Redux/Actions/posts';
import From from '../Form/From';
import Posts from '../Posts/Posts';
import useStyles from './styles'
import Paginate from '../Pagination';
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    } , [dispatch])
    const classes = useStyles()
    return (
        <Grow in>
                <Container maxWidth="xl">
                    <Grid container justifyContent="space-between" className={classes.mainContainer} alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12} md={9}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <From />
                            {/* <Paper elevation={6}>
                            <Paginate />
                            </Paper> */}
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    );
};

export default Home;