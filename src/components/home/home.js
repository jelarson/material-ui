import React from 'react'
import { Grid } from '@material-ui/core'

import Header from './header'
import Content from './content'

export default function Home() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  )
}
