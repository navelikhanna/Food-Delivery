import React, { useState } from 'react';
import './Home.css';
import Header from '../../Componets/Header/Header.jsx';
import ExploreMenu from '../../Componets/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../Componets/FoodDisplay/FoodDisplay.jsx';
import AppDownload from '../../Componets/AppDownload/AppDownload.jsx';
import CustomerReviews from '../../Componets/CustomerReview/CustomerReviews.jsx'
import Feedback from '../../Componets/Feedback/FeedbackForm.jsx';

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <CustomerReviews  />
      <Feedback/>
      <AppDownload />
    </div>
  );
};

export default Home;
