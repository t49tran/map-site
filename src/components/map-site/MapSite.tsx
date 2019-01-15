import * as React from 'react';
import { TrafficMap } from 'components/traffic-map';
import { IncidentStore, IIncident } from 'src/stores/IncidentStore';
import { inject } from 'mobx-react';
import { IStores } from 'stores';
import Drawer from '@material-ui/core/Drawer';
import { IncidentList } from 'components/incident-list/IncidentList';
import { incidentDrawerClasses, DrawerPaperClass } from './MapSite.emotion';

type IMapSiteInjectedProps = Pick<
  IncidentStore,
  | 'getIncidents'
  | 'incidentList'
  | 'setIncidentsDisplayingOnMap'
  | 'incidentsDisplayingOnMapList'
>;

class MapSite extends React.Component {
  get injectedProps() {
    return this.props as IMapSiteInjectedProps;
  }

  componentDidMount() {
    const { getIncidents } = this.injectedProps;

    getIncidents();
  }

  mapChangeHandler = (incidents: IIncident[]) => {
    const { setIncidentsDisplayingOnMap } = this.injectedProps;

    setIncidentsDisplayingOnMap(incidents);
  };

  render() {
    const { incidentList, incidentsDisplayingOnMapList } = this.injectedProps;

    return (
      <React.Fragment>
        <Drawer classes={incidentDrawerClasses} variant="permanent">
          {incidentsDisplayingOnMapList && (
            <IncidentList incidents={incidentsDisplayingOnMapList} />
          )}
        </Drawer>
        <TrafficMap
          onMapChange={this.mapChangeHandler}
          incidents={incidentList}
        />
      </React.Fragment>
    );
  }
}

const EnhancedMapSite = inject(
  ({
    incidentStore: {
      getIncidents,
      incidentList,
      incidentsDisplayingOnMapList,
      setIncidentsDisplayingOnMap
    }
  }: IStores) => ({
    getIncidents,
    incidentList,
    setIncidentsDisplayingOnMap,
    incidentsDisplayingOnMapList
  })
)(MapSite);

export { EnhancedMapSite as MapSite };
