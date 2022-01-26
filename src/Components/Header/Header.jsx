import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import * as icons from '../Icons/Icons';
const pages = ['Features', 'Solutions', 'Integrations', 'Resources'];

const Header = () => {



    return (
        <AppBar position="sticky" color="inherit">
            <Container sx={{ py: 1 }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: { md: '3', xs: 1 }, display: 'flex' }}
                    >
                        <icons.Logo />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map((page) => (

                            <Typography ><Link underline="none" sx={{ fontWeight: 700, my: 2, mx: { md: 4, xs: '4px' }, color: '#000', fontSize: { md: '.9rem', xs: '.7rem' }, cursor: 'pointer' }} >{page}</Link></Typography>

                        ))}
                        <Button sx={{ display: { md: 'block', xs: 'none', border: '2px solid #FF6019', fontWeight: "bold", borderRadius: "50vw", color: "#FF6019" } }}>Start My Free Trail</Button>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
