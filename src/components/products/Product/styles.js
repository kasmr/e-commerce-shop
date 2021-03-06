import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '80%', 
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
        
      },
}))