import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '5px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  img: {
    width: '30px',
    marginRight: "10px"
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column"
  },
  typography: {
    
  }
}));