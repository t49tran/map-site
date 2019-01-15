import * as React from 'react';
import { IIncident } from 'stores/IncidentStore';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { IncidentListItem } from './IncidentListItem';
import Divider from '@material-ui/core/Divider';

interface IIncidentListProps {
  incidents: IIncident[];
}

const incidentListSubHeader = (
  <React.Fragment>
    <ListSubheader component="h2">Incidents</ListSubheader>
    <Divider />
  </React.Fragment>
);

export const IncidentList: React.FunctionComponent<IIncidentListProps> = ({
  incidents
}) => (
  <List subheader={incidentListSubHeader}>
    {incidents.map(incident => (
      <React.Fragment key={incident.id}>
        <IncidentListItem incident={incident} />
        <Divider />
      </React.Fragment>
    ))}
  </List>
);
