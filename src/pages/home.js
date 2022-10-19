import React from 'react';
import HomeComponent from '../components/Home/'
import Separator from '../components/Shared/separator';
import Work from '../components/Work';
import "./home.css";

const Home = () => {
  return (
    <>
      <HomeComponent />
      <Separator />
      <Work />
    </>
  );
};
  
export default Home;