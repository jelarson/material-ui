import React from 'react'
import { css } from '@emotion/core'
import { Button, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from './header'

const useStyles = makeStyles({
  homeStyle: {
    fontStyle: 'oblique',
    fontSize: '30px',
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          This is where the content will be
        </Grid>
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  )
}
