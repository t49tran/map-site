import { action, computed, observable, runInAction } from 'mobx';
import { getIncidents } from 'services/TrafficService';

export interface IIncident {
  id: string;
  alert_type: string;
  lat: string;
  long: string;
  title: string;
  description: string;
}

export interface IIncidentStoreState {
  incidents?: IIncident[];
  incidentsDisplayingOnMap?: IIncident[];
}

export class IncidentStore {
  state = observable<IIncidentStoreState>({
    incidents: [],
    incidentsDisplayingOnMap: []
  });

  @action.bound
  async getIncidents() {
    const { incidents } = await getIncidents();

    runInAction('setIncidents async', () => {
      this.state.incidents = incidents;
    });
  }

  @action.bound
  setIncidentsDisplayingOnMap(incidents: IIncident[]) {
    this.state.incidentsDisplayingOnMap = incidents;
  }

  @computed
  get incidentList() {
    const { incidents } = this.state;

    return incidents ? Array.from(incidents.values()) : [];
  }

  @computed
  get incidentsDisplayingOnMapList() {
    const { incidentsDisplayingOnMap } = this.state;

    return incidentsDisplayingOnMap
      ? Array.from(incidentsDisplayingOnMap.values())
      : [];
  }
}
