import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Avatar, Box } from '@material-ui/core';
import Images from '../../static/media/*.jpg';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing(3) * 2}px)`,
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
    transition: 'all .3ms',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));

export default function UsersListItem(props) {
  const classes = useStyles();
  
  const nameInitials = () => {
    return (props.user.name).split(' ').map(subName => subName.charAt(0)).join('').substr(0, 2).toUpperCase();
  }

  const mediaUrl = () => {
    const keys = Object.keys(Images);
    const image = Images[keys[keys.length * Math.random() << 0]];
    return image;
  }
  
  return(
    <Paper className={classes.card} style={{ backgroundImage: `url(${mediaUrl()})` }}>
    <Avatar className={classes.thumbnail}>{nameInitials()}</Avatar>
    <Typography variant="h6" gutterBottom={true} align="center">
    {props.user.name} ({props.user.username})
    </Typography>
    <Box display="flex" className={classes.social} justifyContent="space-around">
        <Icon className={classes.socialItem} color='disabled'>mail_outline</Icon>
        <Icon className={classes.socialItem} color='disabled'>person_pin</Icon>
        <Icon className={classes.socialItem} color='disabled'>phone</Icon>
        <Icon className={classes.socialItem} color='disabled'>language</Icon>
        <Icon className={classes.socialItem} color='disabled'>location_city</Icon>
    </Box>
    </Paper >
    )
  }