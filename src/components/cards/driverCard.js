import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import { Avatar, IconButton, CardMedia } from '@material-ui/core'

// const useStyles = makeStyles({
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// })

export default function DriverCard(props) {
  // const classes = useStyles()
  const { avatarSrc, title, subtitle, description, imgSrc } = props

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: '100px' }} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
