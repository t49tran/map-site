import * as React from 'react';
import { IIncident } from 'stores/IncidentStore';
import { GoogleMap } from 'components/google-map';
import { IncidentMarker } from 'components/incident-marker';
import { TrafficMapWrapper } from './TrafficMap.emotion';

interface ITrafficMapProps {
  incidents: IIncident[];
}

console.log(
  process.env.REACT_APP_MAP_DEFAULT_CENTER_LAT,
  process.env.REACT_APP_MAP_DEFAULT_CENTER_LNG
);

export class TrafficMap extends React.Component<ITrafficMapProps> {
  apiLoadedHandler = ({ map, maps }: { map: any; maps: any }) => {
    console.log(map, maps);
  };

  render() {
    const { incidents } = this.props;

    return (
      <TrafficMapWrapper>
        <GoogleMap zoom={14} onApiLoaded={this.apiLoadedHandler}>
          {incidents.map(incident => (
            <IncidentMarker
              key={incident.id}
              incident={incident}
              lat={incident.lat}
              lng={incident.long}
            />
          ))}
        </GoogleMap>
      </TrafficMapWrapper>
    );
  }
}
