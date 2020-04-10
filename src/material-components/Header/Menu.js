import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles/Menu.style';

export default function HeaderMenu() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          Home
        </Typography>
      </Grid>
      <Grid item className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          Blog
        </Typography>
      </Grid>
      <Grid item className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          Shop
        </Typography>
      </Grid>
      <Grid item className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          Pictures
        </Typography>
      </Grid>
      <Grid item className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          About Us
        </Typography>
      </Grid>
      <Grid item className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          Contact Us
        </Typography>
      </Grid>
    </Grid>
  );
}
