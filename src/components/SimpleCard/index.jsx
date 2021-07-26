import React from 'react';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Humidity from "../../assets/img/humidity.png"
import Wind from "../../assets/img/wind.png"
import List from "../List"
import {handleTempIcons}from "../../utils/handleTempImg"


export default function SimpleCard({data}) {
  const classes = useStyles();


  return (
  <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="initial" gutterBottom>
            {data.city} - {data.date}
          </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>{data.description}</Typography>
          <Box display="flex" alignItems="center">
            <img className={classes.imgTemp} src={handleTempIcons(data.condition_slug)} alt="" /> 
          <Typography variant="h4" component="h2">
            {data.temp}°
          </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box display="flex" ml="10px">
            <Box mr="15px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <img className={classes.img} src={Humidity} alt="" />
              <Typography variant="caption" component="p">
            {data.humidity}%
          </Typography>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <img className={classes.img} src={Wind} alt="" />
              <Typography variant="caption" component="p">
            {data.wind_speedy}
          </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
      {data.forecast.map((item, idx) => (
        <List key={`${item.weekday}-${idx}`} forecast={item}/>
      ))}
      </>
  );
}