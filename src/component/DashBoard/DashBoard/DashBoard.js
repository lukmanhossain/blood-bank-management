import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const DashBoard = () => {
    const {admin} = useAuth(); 
    return (
        <div>
            {admin && <Box>
                {/* <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                    <Button color="inherit">Make Admin</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`${path}/manageOrder`}>
                    <Button color="inherit">Manage All Order</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`${path}/manageproducts`}>
                    <Button color="inherit">Manage Products</Button>
                </NavLink> */}
                <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                    <Button color="inherit">Make Admin</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`${path}/manageOrder`}>
                    <Button color="inherit">Manage All Order</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`${path}/manageproducts`}>
                    <Button color="inherit">Manage Products</Button>
                </NavLink>
            </Box>}
        </div>
    );
};

export default DashBoard;