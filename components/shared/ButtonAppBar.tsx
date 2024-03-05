import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import trueLogo from "@/public/true-logo.svg";
import accountCircle from "@/public/account-circle.svg";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box component="section" sx={{ mr: 2 }}>
                        <Image
                            priority
                            src={trueLogo}
                            alt="logo"
                        />
                    </Box>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, color: "#9F9F9F" }}>
                        Channel Care
                    </Typography>
                    <Button
                        sx={{ pl: 2 }}
                        style={{
                            textTransform: 'none',
                            color: "#44444C",
                            backgroundColor: "#F2F2F2",
                        }}
                        variant="text"
                        startIcon={
                            <Image
                                priority
                                src={accountCircle}
                                alt="accountCircle"
                            />
                        }>
                        Dealer
                    </Button>
                    <Button
                        style={{
                            textTransform: 'none',
                            color: "#44444C",
                            backgroundColor: "#E2E2E2",
                        }}
                        variant="text">
                        1799001
                    </Button>
                    <Button
                        sx={{ ml: 2, boxShadow: 1 }}
                        style={{
                            textTransform: 'none',
                            color: "#9F9F9F",
                            borderColor: "#9F9F9F",
                        }} variant="outlined">
                        Contact Us
                    </Button>
                    <Button
                        sx={{ ml: 2, boxShadow: 1 }}
                        style={{
                            textTransform: 'none',
                            color: "#9F9F9F",
                            borderColor: "#9F9F9F",
                        }} variant="outlined">
                        Log Out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}