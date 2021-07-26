import React from 'react';
import { useStyles } from './styles';
import Accordion from '@material-ui/core/Accordion';
import Box from '@material-ui/core/Box';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {handleTempIcons} from "../../utils/handleTempImg"


export default function List({forecast}) {
const classes = useStyles();



  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{forecast.weekday} {forecast.date}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Box display="flex" alignItems="center">
            <img className={classes.img} src={handleTempIcons(forecast.condition)} alt="" /> 
            <Typography className={classes.heading}>{forecast.description}</Typography>
          </Box>
          <Box ml="40px">
          <Typography color="textSecondary" variant="caption">
            Max {forecast.max}° 
            Min {forecast.min}° 
          </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
