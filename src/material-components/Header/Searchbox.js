import React, { useEffect } from 'react';
import { Paper, Grid } from '@material-ui/core';
import useStyles from './styles/SearchBox.style';
import SearchIcon from '@material-ui/icons/SearchRounded';

export default function SearchBox(props) {
  const { setSearchBoxIsOpen } = props;
  const classes = useStyles();
  let searchBoxRef;

  // componentDidMount
  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      console.log('event', event);
      if (searchBoxRef && !searchBoxRef.contains(event.target)) {
        console.log('closing searchBox');
        setSearchBoxIsOpen(false);
      }
    });
  }, []);

  return (
    <Paper className={classes.rootPaper} ref={(node) => (searchBoxRef = node)}>
      <Grid
        container
        justify='space-between'
        className={classes.searchBoxTextFielBox}
      >
        <input
          className={classes.searchTextField}
          placeholder='Search ...'
          autoFocus
        />
        <SearchIcon />
      </Grid>
    </Paper>
  );
}
