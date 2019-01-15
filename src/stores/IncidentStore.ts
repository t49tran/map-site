import { action, computed, observable, runInAction } from 'mobx';
import { getIncidents } from 'services/TrafficService';

export interface IIncident {
  id: string;
  alert_type: string;
  lat: number;
  long: number;
  title: string;
  description: string;
}

export interface IIncidentStoreState {
  incidents?: IIncident[];
}

export class IncidentStore {
  state = observable<IIncidentStoreState>({ incidents: [] });

  @action.bound
  async getIncidents() {
    const { incidents } = await getIncidents();

    runInAction('setIncidents async', () => {
      this.state.incidents = incidents;
    });
  }

  @computed
  get incidentList() {
    const { incidents } = this.state;

    return incidents ? Array.from(incidents.values()) : [];
  }
}
