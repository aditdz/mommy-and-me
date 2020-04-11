import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  rootPaper: {
    padding: '0 16px',
    zIndex: 1,
  },
  logo: {
    height: 100,
  },
  searchIcon: {
    color: 'white',
    backgroundColor: theme.palette.primary.light,
    padding: 10,
    borderRadius: '50%',
  },
  searchIconBox: {
    border: `1px dashed ${theme.palette.primary.light}`,
    padding: 6,
    borderRadius: '50%',
    height: 44,
    width: 44,
    cursor: 'pointer',
  },
  searchBoxItem: {
    position: 'relative',
  },
}));

export default useStyles;
