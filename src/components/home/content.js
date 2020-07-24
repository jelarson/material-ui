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
          description="Lewis Hamilton always wins! Well... Most of the time."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Valtteri Bottas"
          subtitle="Mercedes"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Finland.jpg.transform/2col/image.jpg"
          description="The 'other' Mercedes driver who also wins alot."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Max Verstappen"
          subtitle="Red Bull"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Netherlands.jpg.transform/2col/image.jpg"
          description="Max is Red Bull's best and most experienced driver."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Alexander Albon"
          subtitle="Red Bull"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Thailand.jpg.transform/2col/image.jpg"
          description="Apparently he's from Tailand."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Lando Norris"
          subtitle="McLaren"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col/image.jpg"
          description="Gains 5 places on last lap."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Carlos Sainz"
          subtitle="McLaren"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Spain.jpg.transform/2col/image.jpg"
          description="Leaving for Ferrari next year."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Sergio Perez"
          subtitle="Racing Point"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Mexico.jpg.transform/2col/image.jpg"
          description="Probably going to lose his seat to Vettel."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Lance Stroll"
          subtitle="Racing Point"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Canada.jpg.transform/2col/image.jpg"
          description="Wouldn't have a seat without his daddy."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Charles Leclerc"
          subtitle="Ferrari"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Monaco.jpg.transform/2col/image.jpg"
          description="Enjoys crashing into his teammates."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Sebastian Vettel"
          subtitle="Ferrari"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Germany.jpg.transform/2col/image.jpg"
          description="Second highest paid F1 driver."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Daniel Ricciardo"
          subtitle="Renault"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/Australia.jpg.transform/2col/image.jpg"
          description="Leaving for McLaren next year."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DriverCard
          title="Esteban Ocon"
          subtitle="Renault"
          avatarSrc="https://www.formula1.com/content/dam/fom-website/flags/France.jpg.transform/2col/image.jpg"
          description="Didn't have a seat last year."
          imgSrc="https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png"
        />
      </Grid>
    </Grid>
  )
}
