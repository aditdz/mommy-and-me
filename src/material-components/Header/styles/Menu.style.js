import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  menuItem: {
    padding: 8,
    margin: 8,
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    borderRadius: 12,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menuItemText: {
    fontWeight: 800,
  },
}));

export default useStyles;
