import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to CodeAnt AI</h1>
      <Button label="Learn More" onClick={() => alert("Learn More Clicked!")} />
      <div className="cards">
        <Card title="Code Quality" content="AI-driven code improvement for cleaner code." />
        <Card title="Security" content="Enhance your code's security with automated fixes." />
      </div>
    </div>
  );
};

export default HomePage;
