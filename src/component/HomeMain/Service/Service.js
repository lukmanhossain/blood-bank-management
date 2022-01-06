import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;

    return (
        // <Grid item xs={3} sm={4} md={4} >
        //     <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        //         <CardMedia
        //             sx={{ borderRadius: '16px' }}
        //             component="img"
        //             style={{ width: 'auto', height: 'auto', margin: '0 auto' }}
        //             image={img}
        //             alt="green iguana"
        //         />
        //         <CardContent>

        //             <Typography sx={{ textAlign: 'center' }} variant="h5" component="div" >
        //                 {name}
        //             </Typography>

        //             <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.primary">
        //                 {description}

        //             </Typography>
        //         </CardContent>

        //     </Card>

        // </Grid>

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', borderRadius: 1, boxShadow: 3 }}>

                <CardMedia
                    component="img"
                    style={{ width: '365px', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />

                <CardContent>

                    <Typography variant='h6' component='div' sx={{ color: 'success-main' }}>
                        {name}
                    </Typography>
                    <Typography variant='body4' sx={{ textAlign: 'left', pl: '3' }}>
                        {description}
                    </Typography>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-around', borderTop: "1px solid #ddd", pt: 2 }}><NavLink style={{ textDecoration: 'none', color: 'red' }} to="/explore">
                        <Button color="inherit">Find</Button>
                    </NavLink></Box> */}
                </CardContent >

            </Card>
        </Grid>
    );
};

export default Service;