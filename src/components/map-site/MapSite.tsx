import * as React from 'react';
import { TrafficMap } from 'components/traffic-map';
import { IncidentStore, IIncident } from 'src/stores/IncidentStore';
import { inject } from 'mobx-react';
import { IStores } from 'stores';
import Drawer from '@material-ui/core/Drawer';
import { IncidentList } from 'components/incident-list/IncidentList';
import {
  incidentDrawerClasses,
  IncidentListButton,
  IncidentListBackButton
} from './MapSite.emotion';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

type IMapSiteInjectedProps = Pick<
  IncidentStore,
  | 'getIncidents'
  | 'incidentList'
  | 'setIncidentsDisplayingOnMap'
  | 'incidentsDisplayingOnMapList'
>;

interface IMapSiteState {
  isListOpened: boolean;
}

class MapSite extends React.Component<object, IMapSiteState> {
  state = {
    isListOpened: false
  };

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

  incidentListButtonClickHandler = () => {
    this.setState({
      isListOpened: true
    });
  };

  incidentListBackButtonClickHandler = () => {
    this.setState({
      isListOpened: false
    });
  };

  render() {
    const { incidentList, incidentsDisplayingOnMapList } = this.injectedProps;
    const { isListOpened } = this.state;

    return (
      <React.Fragment>
        <Drawer
          classes={incidentDrawerClasses(isListOpened)}
          variant="permanent"
        >
          {isListOpened && (
            <IncidentListBackButton
              onClick={this.incidentListBackButtonClickHandler}
              color="primary"
            >
              <CloseIcon />
            </IncidentListBackButton>
          )}
          {incidentsDisplayingOnMapList && (
            <IncidentList incidents={incidentsDisplayingOnMapList} />
          )}
        </Drawer>
        <TrafficMap
          isListOpened={isListOpened}
          onMapChange={this.mapChangeHandler}
          incidents={incidentList}
        />
        <IncidentListButton
          onClick={this.incidentListButtonClickHandler}
          variant="contained"
          color="primary"
        >
          Incidents {incidentsDisplayingOnMapList.length}
        </IncidentListButton>
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
