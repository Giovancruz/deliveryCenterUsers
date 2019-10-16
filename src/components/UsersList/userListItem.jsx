import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Avatar, Box } from '@material-ui/core';
import Images from '../../static/media/*.jpg';
import Icon from '@material-ui/core/Icon';
import Grow from '@material-ui/core/Grow';


const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '360px',
    padding: theme.spacing(3, 2),
    borderBottom: `1px solid ${theme.palette.primary.main}`
  },
  thumbnail: {
    margin: '0 auto 20px',
    border: '2px solid white',
    width: 100,
    height: 100,
  },
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


class userListItem extends Component {
  render() {
    const { classes } = this.props;

    const nameInitials = () => {
      return (this.props.user.name).split(' ').map(subName => subName.charAt(0)).join('').substr(0, 2).toUpperCase();
    }

    const mediaUrl = () => {
      const keys = Object.keys(Images);
      const image = Images[keys[keys.length * Math.random() << 0]];
      return image;
    }

    return (
      <Grow in={true}>
      <Paper className={classes.card} style={{ backgroundImage: `url(${mediaUrl()})` }}>
      <Avatar className={classes.thumbnail}>{nameInitials()}</Avatar>
      <Typography variant="h6" gutterBottom={true} align="center">
      {this.props.user.name} ({this.props.user.username})
      </Typography>
      <Box display="flex" className={classes.social} justifyContent="space-around">
          <Icon className={classes.socialItem} color='disabled'>mail_outline</Icon>
          <Icon className={classes.socialItem} color='disabled'>person_pin</Icon>
          <Icon className={classes.socialItem} color='disabled'>phone</Icon>
          <Icon className={classes.socialItem} color='disabled'>language</Icon>
          <Icon className={classes.socialItem} color='disabled'>location_city</Icon>
      </Box>
      </Paper>
      </Grow>
    )
  }
}

export default withStyles(styles)(userListItem);