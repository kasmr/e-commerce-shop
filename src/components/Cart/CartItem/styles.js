import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  cartActions: {
    justifyContent: 'space-between',
    display: 'flex'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    margin: '0 1rem',
    fontWeight: 'bold'
  }
}));