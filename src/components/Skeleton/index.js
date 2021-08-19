import React from 'react';
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton';

const variants = ['h1', 'h3', 'body1', 'caption'];

export default function TypographyDemo(props) {
  return (
    <Grid container>
      <Grid container>
        <Skeleton variant="rect" width="20%" height={118} />
        <Skeleton variant="rect" width="20%" height={118} />
        <Skeleton variant="rect" width="20%" height={118} />
        <Skeleton variant="rect" width="20%" height={118} />
      </Grid>

      <Skeleton variant="rect" width={210} height={118} />
    </Grid>
  );
}