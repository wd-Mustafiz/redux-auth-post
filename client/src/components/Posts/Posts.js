import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles'
const Posts = () => {
    const classes = useStyles()
    const posts = useSelector(state => state.posts)
    return (
        !posts.length? <CircularProgress color="secondary"/> : (
            <Grid container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} xs={12} sm={6} md={3} item >
                            <Post post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
};

export default Posts;