import React from 'react';
import { RiProductHuntLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Home.scss';
import heroImg from '../../assets/Cat.jpg';
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/HiddenLink';

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>
        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="container hero">
        <div className="hero-text">
          <h2>CatShup All-in-one Marketplace for pet life</h2>
          <p>
            Labore dolore do aliquip dolore minim et ad sit ut mollit quis.
            Velit cupidatat cupidatat sit laborum. Dolor ad mollit ullamco
            voluptate voluptate labore. Elit non laborum anim dolor tempor et
            commodo excepteur. Sit non enim officia in fugiat occaecat cupidatat
            excepteur et velit sit. Voluptate incididunt sint qui reprehenderit
            Lorem. Est ex proident aliqua enim. Est incididunt eiusmod
            exercitation culpa.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="100K+" text="People" />
            <NumberText num="100+" text="Shop" />
            <NumberText num="10+" text="Hospital" />
          </div>
        </div>

        <div className="hero-image --flex-center">
          <img src={heroImg} alt="Cat" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-dark">{num}</h3>
      <p className="--color-dark">{text}</p>
    </div>
  );
};

export default Home;
