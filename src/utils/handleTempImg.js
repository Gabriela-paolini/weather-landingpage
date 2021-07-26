import storm from "../assets/img/rainIcon.svg"
import snow from "../assets/img/snowyCloudIcon.svg"
import fog from "../assets/img/cloudyDayIcon.svg"
import clearDay from "../assets/img/sunIcon.svg"
import clearNight from "../assets/img/eveningIcon.svg"
import cloudlyNight from "../assets/img/eveningSkyIcon.svg"

export const handleTempIcons = (value) => {
  if (value === "storm" || value === "hail" || value === "rain" ) {
    return storm
  } else if(value === "fog" || value === "cloud" || value === "cloudly_day") {
    return fog
  } else if(value === "clear_day" || value === "none_day") {
    return clearDay
  } else if(value === "cloudly_night" || value === "none_night") {
    return clearNight
  } else if(value === "snow") {
    return snow
  } else {
    return cloudlyNight
  }
}