import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../../constants/images/YLEH135.jpg';
const useStyles = makeStyles((theme) => ({
  center: {
    width: '100%',
    position: 'relative',
    marginTop: -40,
  },
  massage: {
    color: 'rgb(100, 97, 97)',
  },
  phototitle: {
    position: 'absolute',
    color: 'rgb(45, 85, 131)',
    top: 270,
    left: 40,
    fontFamily: 'Fredoka One, cursive',
  },
  center__text: {
    fontSize: '2vw',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro, cursive',
    color: 'rgb(7, 2, 32)',
    padding: 16,
  },
  svgphoto: {
    marginTop: 230,
    width: '100%',
    height: 600,
  },
  // photodiv: {
  //   backgroundImage: 'linear-gradient(to left, transparent 0%, white 100%)',
  //   fallback: {
  //     backgroundImage: ` url("${Background}" )`,
  //   },
  photodiv: {
    background: `url(${Background})`,
    fallbacks: {
      background: 'linear-gradient(to left, transparent 0%, white 100%)',
    },
    width: '100%',
    height: 550,
    marginTop: 40,
    backgroundSize: 'cover',
  },
}));

export default useStyles;
