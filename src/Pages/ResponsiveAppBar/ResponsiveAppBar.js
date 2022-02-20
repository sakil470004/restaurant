import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar elevation={0} position="sticky" style={{ background: '#fcf4e0' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2,color:'red', display: { xs: 'none', md: 'flex' } }}
                    >
                       MI Restaurant
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link style={{ textDecoration: 'none' }} to='/allNews'>All News</Link>
                                </Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1,color:'red', display: { xs: 'flex', md: 'none' } }}
                    >
                        MI Restaurant
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>Home</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            <Link style={{ color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }} to='/cart'><ShoppingCartIcon  style={{color:'black'}}/></Link>
                        </Button>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;