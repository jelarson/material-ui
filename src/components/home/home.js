import React from 'react'
import { css } from '@emotion/core'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  homeStyle: {
    fontStyle: 'oblique',
    fontSize: '30px',
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.homeStyle} color="primary" variant="h1">
        Hello From Typography!
      </Typography>
      <Button color="secondary" variant="outlined">
        Click me!
      </Button>
    </div>
  )
}
