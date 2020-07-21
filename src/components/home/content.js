import React from 'react'
import { Grid } from '@material-ui/core'
import DriverCard from '../cards/driverCard'

export default function Content() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Lewis Hamilton"
          subtitle="Mercedes"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col/image.jpg"
          description="Lewis Hamilton Always Wins"
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png"
        />
      </Grid>
    </Grid>
  )
}
