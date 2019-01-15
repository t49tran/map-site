import { IncidentStore } from './IncidentStore';

export interface IStores {
  incidentStore: IncidentStore;
}

export const stores: IStores = {
  incidentStore: new IncidentStore()
};
