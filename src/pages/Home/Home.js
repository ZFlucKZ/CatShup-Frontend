import React from 'react';
import { RiProductHuntLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Home.scss';
import heroImg from '../../assets/Cat.jpg';

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>
        <ul className="home-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="container hero">
        <div className="hero-text">
          <h2>lorem lorem lorem lorem lorem lorem lorem</h2>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Lorem</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="1" text="lorem" />
            <NumberText num="2" text="lorem" />
            <NumberText num="3" text="lorem" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Cat" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
