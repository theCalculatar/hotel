import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'

function ReviewCard({review}) {
  return (
    <Card elevation={0} sx={{display:'flex',gap:2}}>
        <img
            height={90}
            src={review.image}/>
        <CardContent sx={{bgcolor:'#F4F4F4'}}>
            <Box>
                <Box display={'flex'} gap={1}>
                    <Typography variant="body1" fontWeight={600} >{review.name}</Typography>
                    <Rating value={review.rating} size='small'/>
                    <Typography variant="body1" >Uploaded on the website</Typography>
                </Box>
                <Typography variant="body1" fontSize={14}>
                    {review.description}    
                </Typography>
            </Box>
        </CardContent>    
    </Card>
    )
}

export default ReviewCard