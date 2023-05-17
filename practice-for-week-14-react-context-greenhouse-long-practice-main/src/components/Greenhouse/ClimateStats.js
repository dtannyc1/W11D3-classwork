import './ClimateStats.css';
import {UseClimateContext} from '../../context/ClimateContext';

function ClimateStats() {
  const {Temperature, Humidity} = UseClimateContext();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {Temperature}°F
      </div>
      <div className="humidity">
        Humidity {Humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;