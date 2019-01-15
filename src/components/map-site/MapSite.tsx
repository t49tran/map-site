import * as React from 'react';
import { TrafficMap } from 'components/traffic-map';
import { IncidentStore } from 'src/stores/IncidentStore';
import { inject } from 'mobx-react';
import { IStores } from 'stores';
import Drawer from '@material-ui/core/Drawer';
import { IncidentList } from 'components/incident-list/IncidentList';
import { incidentDrawerClasses, DrawerPaperClass } from './MapSite.emotion';

type IMapSiteInjectedProps = Pick<
  IncidentStore,
  'getIncidents' | 'incidentList'
>;

class MapSite extends React.Component {
  get injectedProps() {
    return this.props as IMapSiteInjectedProps;
  }

  componentDidMount() {
    const { getIncidents } = this.injectedProps;

    getIncidents();
  }

  render() {
    const { incidentList } = this.injectedProps;

    return (
      <React.Fragment>
        <Drawer classes={incidentDrawerClasses} variant="permanent">
          {incidentList && <IncidentList incidents={incidentList} />}
        </Drawer>
        <TrafficMap incidents={incidentList} />
      </React.Fragment>
    );
  }
}

const EnhancedMapSite = inject(
  ({ incidentStore: { getIncidents, incidentList } }: IStores) => ({
    getIncidents,
    incidentList
  })
)(MapSite);

export { EnhancedMapSite as MapSite };
