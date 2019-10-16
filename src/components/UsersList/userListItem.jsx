import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar } from '@material-ui/core';
import Images from '../../static/media/*.jpg';
import Grow from '@material-ui/core/Grow';
import UserItemInfo from './userListItemInfo';


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
  }
});


class userListItem extends Component {

  render() {
    const { classes } = this.props;

    const nameInitials = () => {
      return (this.props.user.name).split(' ').map(subName => subName.charAt(0)).join('').substr(0, 2).toUpperCase();
    };

    const coverBgURL = () => {
      const keys = Object.keys(Images);
      const image = Images[keys[keys.length * Math.random() << 0]];
      return image;
    };

    return (
      <Grow in={true}>
      <Paper className={classes.card} style={{ backgroundImage: `url(${coverBgURL()})` }} elevation={2}>
      <Avatar className={classes.thumbnail}>{nameInitials()}</Avatar>
      <UserItemInfo user={this.props.user}></UserItemInfo>
      </Paper>
      </Grow>
    )
  }
}

export default withStyles(styles)(userListItem);