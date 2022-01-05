import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { id, name, description, img } = service;

    return (
        <Grid item xs={3} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    sx={{ borderRadius: '16px' }}
                    component="img"
                    style={{ width: 'auto', height: 'auto', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography sx={{ textAlign: 'center' }} variant="h5" component="div" >
                        {name}
                    </Typography>

                    <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.primary">
                        {description}

                    </Typography>
                </CardContent>

            </Card>

        </Grid>
    );
};

export default Service;