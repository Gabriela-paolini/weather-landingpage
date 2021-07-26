import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#fff'
    },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    width: '30px'
  },
  imgTemp: {
    width: '30px',
    marginRight: "10px"
  },
  temp: {
    marginLeft: "30px",
    marginTop: "10px"
    
  },
});