import { Container } from '@mui/system';
import React from 'react';
import Navbar from "../components/Navbar";
import PokemomCard from '../components/PokemomCard';

export const Home = () =>{
    return (
        <div>
        <Navbar />
        <Container maxWidth="false">
        <PokemomCard />
        <PokemomCard />
        <PokemomCard />
        <PokemomCard />
        <PokemomCard />
        </Container>
        
        </div>
    );
};