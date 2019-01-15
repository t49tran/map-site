import * as React from 'react';
import { IIncident } from 'stores/IncidentStore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WarningIcon from '@material-ui/icons/Warning';

interface IIncidentListItemProps {
  incident: IIncident;
}

export const IncidentListItem: React.FunctionComponent<
  IIncidentListItemProps
> = ({ incident: { title, description } }) => (
  <ListItem button>
    <ListItemIcon>
      <WarningIcon />
    </ListItemIcon>
    <ListItemText primary={title} secondary={description} />
  </ListItem>
);
