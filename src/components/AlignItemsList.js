import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  const users = props.users.map((user, key)=> {
    return (
      <ListItem alignItems="flex-start" key={key}>
        <ListItemAvatar>
          <Avatar src={user.img}/>
        </ListItemAvatar>
        <ListItemText 
          primary={user.name}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                {user.job}
              </Typography>
              {' — ' + user.description}
            </React.Fragment>
          }>
        </ListItemText>
      </ListItem>
    )
  })
  return (
    <List className={classes.root}>
      {users}
    </List>
  )
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);