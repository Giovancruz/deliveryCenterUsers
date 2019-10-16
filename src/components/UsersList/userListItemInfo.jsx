import React, { Component } from 'react';
import { Typography, Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  social: {
    marginTop: 'auto',
    paddingTop: theme.spacing(3),
  },
  socialItem: {
    cursor: 'pointer',
    transition: 'all .3s',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
});

class userListItemInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInfo: 'name'
    }
  }
  
  handleChangeInfo(display) {
    this.setState({
      displayInfo: display
    });
  }

  render() {
    const { classes } = this.props;
    const { displayInfo } = this.state

    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom={true} align="center" hidden={displayInfo !== 'name'}>
      {this.props.user.name} ({this.props.user.username})
      </Typography>

      <List dense hidden={displayInfo !== 'contact'}>
        <ListItem>
          <ListItemIcon>
            <Icon>contact_mail</Icon>
          </ListItemIcon>
          <ListItemText primary={this.props.user.email} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon>contact_phone</Icon>
          </ListItemIcon>
          <ListItemText primary={this.props.user.phone} />
        </ListItem>
        <ListItem button component="a" href={`http://${this.props.user.website}`} target="_blank">
          <ListItemIcon>
            <Icon>open_in_new</Icon>
          </ListItemIcon>
          <ListItemText primary={this.props.user.website} />
        </ListItem>
      </List>
      
      <Box hidden={displayInfo !== 'address'}>
        <Typography variant="body1" gutterBottom={true} align="center">
          {this.props.user.address.street}, {this.props.user.address.suite} - {this.props.user.address.city}
        </Typography>
        <Typography variant="caption" align="center" display="block">
          ({this.props.user.address.zipcode})
        </Typography>
      </Box>

      <List dense hidden={displayInfo !== 'work'}>
        <ListItem>
          <ListItemText primary={this.props.user.company.name} secondary={this.props.user.company.catchPhrase} />
        </ListItem>
      </List>

      <Box display="flex" className={classes.social} justifyContent="space-around">
        <Icon onClick={() => this.handleChangeInfo('name')} className={classes.socialItem} color={displayInfo == 'name' ? 'primary' : 'disabled'}>face</Icon>
        <Icon onClick={() => this.handleChangeInfo('contact')} className={classes.socialItem} color={displayInfo == 'contact' ? 'primary' : 'disabled'}>mail_outline</Icon>
        <Icon onClick={() => this.handleChangeInfo('address')} className={classes.socialItem} color={displayInfo == 'address' ? 'primary' : 'disabled'}>person_pin</Icon>
        <Icon onClick={() => this.handleChangeInfo('work')} className={classes.socialItem} color={displayInfo == 'work' ? 'primary' : 'disabled'}>work_outline</Icon>
      </Box>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(userListItemInfo);
