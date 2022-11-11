import React, { useState } from 'react';
import Card from '../../components/card/Card';
import './Contact.scss';
import { FaPhoneAlt, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BACKEND_URL } from '../../services/authService';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject('');
      setMessage('');
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Subject</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary" type="submit">
              Send Message
            </button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={'card2'}>
            <h3>Contact Information</h3>
            <p>Nisi occaecat ea mollit ipsum aliqua ipsum labore minim in.</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>+6666666666</p>
              </span>
              <span>
                <FaEnvelope />
                <p>test@gmail.ccc</p>
              </span>
              <span>
                <GoLocation />
                <p>lorem ipsum</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
