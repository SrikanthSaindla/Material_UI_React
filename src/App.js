import React from 'react'
import { Typography ,AppBar,Toolbar,Container, ImageList, ImageListItem, TextField,Button} from '@mui/material'

const images=[
  {
    "id":1,
    "image":"https://cdn.pixabay.com/photo/2022/09/07/07/07/cat-7438092__340.jpg",
    "title":"im1"
  },
  {
    "id":2,
    "image":"https://res.cloudinary.com/srikanth143/image/upload/v1656581632/cld-sample-3.jpg",
     "title":"im2"
  },
  {
    "id":3,
    "image":"https://res.cloudinary.com/srikanth143/image/upload/v1656581633/cld-sample-4.jpg",
    "title":"im3"
  },
  {
    "id":4,
    "image":"https://res.cloudinary.com/srikanth143/image/upload/v1657689481/banner_1_f99t9j.png",
    "title":"im4"
  },
  {
    "id":5,
    "image":"https://res.cloudinary.com/srikanth143/image/upload/v1656581608/sample.jpg",
    "title":"im5"
  },
  {
    "id":6,
    "image":"https://res.cloudinary.com/srikanth143/image/upload/v1656581632/cld-sample-2.jpg",
    "title":"im6"
  },
  
  {
    "id":7,
    "image":"https://res.cloudinary.com/srikanth143/image/upload/v1663144619/photoes/IMG_20201112_190648_003_xzstc0.jpg",
    "title":"im7"
  },
  {
    "id":8,
    "image":"https://cdn.pixabay.com/photo/2022/09/06/14/40/beach-7436793__340.jpg",
    "title":"im8"
  }
  
]
const App = () => {
  return (
    <div>
       <AppBar>
        <Toolbar>
          <Typography variant='h5'>PhotoGraphy</Typography>
        </Toolbar>
       </AppBar>
       <Container style={{"marginTop":"70px","textAlign":"center"}}>
        <Typography variant='h2'>Our latest version of Photoes</Typography>
        <Typography variant='p'>Pleasure to take your photoes well, Pleasure
        fill the form for any invite request</Typography>

       </Container>
       <Container>
        <ImageList rowHeight={300}   cols={3}>
           
           {images.map((each)=>
           <ImageListItem cols={1} key={each.id}>
            <img src={each.image} alt={each.title}/>
           </ImageListItem>)}
           
        </ImageList>
       </Container>
       <center>
        <Container>
          <Typography variant='h4'>contact Form</Typography>
          <form> 
<TextField  style={{"width":"500px","margin":"5px"}}type="text" label="name" variant='outlined' /><br/>
<TextField  style={{"width":"500px","margin":"5px"}}type="email" label="Email" variant='outlined' /><br/>
<TextField  style={{"width":"500px","margin":"5px"}}type="text" label="propasal" variant='outlined' /><br/>
<TextField  style={{"width":"500px","margin":"5px"}}type="text" label="Address" variant='outlined' /><br/>
<Button variant="contained " color=''>submit</Button>
</form>
        </Container>

       </center>
    </div>
  )
}

export default App