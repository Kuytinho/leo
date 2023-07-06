import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PersonCard from './components/PersonCard';
import Navbar from './components/NavBar';
import persons from './persons';
import AudioPlayer from 'react-audio-player';
import './App.css';
import Music from './music/musica.mp3'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    document.title = "Aniversário da Thatha!!!";
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Container maxWidth={false}>
        <Grid container>
          {filteredPersons.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <PersonCard
                key={index}
                name={person.name}
                description={person.description}
                videoUrl={person.videoUrl}
                image={person.image}
              />
            </Grid >
          ))}
        </Grid>
      </Container>
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
        <AudioPlayer
          src={Music}
          controls
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

export default App;
