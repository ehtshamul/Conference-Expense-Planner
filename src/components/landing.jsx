import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="main">

      <div className="text">
        <h1>ConferenceVenue</h1>
        <h3>Pro Planner</h3>
        <p>
          Your premier destination for planning exceptional conferences and events. We provide
          state-of-the-art venues, professional audio-visual equipment, and exquisite catering
          services to make your conference unforgettable. From intimate meetings to large-scale
          conventions, we have everything you need to create the perfect event experience.
        </p>
      </div>

      <div className="boxes">
        <div className="box">
          <h2>Venue</h2>
          <p>
            Explore our versatile venues designed to accommodate events of all sizes, equipped with
            modern amenities and comfortable seating.
          </p>
        </div>
        <div className="box">
          <h2>Audio-Visual</h2>
          <p>
            State-of-the-art audio-visual equipment to ensure your presentations are impactful and
            engaging.
          </p>
        </div>
        <div className="box">
          <h2>Catering</h2>
          <p>
            Delicious catering options tailored to your event's needs, from coffee breaks to
            full-course meals.
          </p>
        </div>
      </div>

      <div className="button">
        <button onClick={() => navigate('/products-selection')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
