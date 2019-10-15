import React from 'react' 
import { CircularProgress, Typography } from '@material-ui/core/';

const Loading = ({ loading, message }) => {
  return loading ? (
    <Typography align="center" variant="overline" display="block">
      <CircularProgress color="primary" size={40} />
      <p className='message'>
        {message}
      </p>
    </Typography>
  ) : null
}

export default Loading