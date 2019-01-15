import * as React from 'react';
import { IIncident } from 'stores/IncidentStore';
import { GoogleMap } from 'components/google-map';
import { IncidentMarker } from 'components/incident-marker';
import { TrafficMapWrapper } from './TrafficMap.emotion';

interface ITrafficMapProps {
  incidents: IIncident[];
  onMapChange: (incidents: IIncident[]) => void;
}

export class TrafficMap extends React.Component<ITrafficMapProps> {
  map: any;
  maps: any;

  apiLoadedHandler = ({ map, maps }: { map: any; maps: any }) => {
    this.map = map;
    this.maps = maps;

    const { incidents } = this.props;

    // create a bounding and fit the map inside
    const bounds = new maps.LatLngBounds();

    incidents.map(({ lat, long }) => {
      if (isNaN(parseFloat(lat)) || isNaN(parseFloat(long))) {
        return;
      }

      bounds.extend({ lat: parseFloat(lat), lng: parseFloat(long) });
    });

    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  };

  onChangeHandler = (mapData: any) => {
    if (!this.maps) {
      return;
    }

    // Filter incidents that are currently shown on the map
    const { incidents, onMapChange } = this.props;
    const bounds = this.map.getBounds();

    const incidentsDisplayingOnMap = incidents.filter(({ lat, long }) => {
      return (
        !isNaN(parseFloat(lat)) &&
        !isNaN(parseFloat(long)) &&
        bounds.contains({ lat: parseFloat(lat), lng: parseFloat(long) })
      );
    });

    onMapChange(incidentsDisplayingOnMap);
  };

  render() {
    const { incidents } = this.props;

    return (
      incidents &&
      incidents.length > 0 && (
        <TrafficMapWrapper>
          <GoogleMap
            onChange={this.onChangeHandler}
            onApiLoaded={this.apiLoadedHandler}
          >
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
      )
    );
  }
}
