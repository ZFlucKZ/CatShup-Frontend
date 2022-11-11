import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../../components/card/Card';
import ChangePassword from '../../components/changePassword/ChangePassword';
import Loader from '../../components/loader/Loader';
import { selectUser } from '../../redux/features/auth/authSlice';
import { getUser, updateUser } from '../../services/authService';
import './Profile.scss';

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);
  const { email } = user;

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();
      if (email !== data.email) {
        navigate('/profile');
      }
    }

    if (!email) {
      navigate('/profile');
    }

    getUserData();
  }, [email, navigate]);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Handle Image Upload
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === 'image/jpg' ||
          profileImage.type === 'image/jpeg' ||
          profileImage.type === 'image/png')
      ) {
        const image = new FormData();
        image.append('file', profileImage);
        image.append('cloud_name', 'djt0nzpgf');
        image.append('upload_preset', 'vzru7qjx');

        // First save image to cloudinary
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/djt0nzpgf/image/upload',
          {
            method: 'post',
            body: image,
          }
        );
        const imageData = await res.json();
        imageURL = imageData.url.toString();
      }
      // Save Profile
      const formData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };

      const data = await updateUser(formData);
      // console.log(data);
      toast.success('User updated');
      navigate('/profile');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="profile --my2">
      {isLoading && <Loader />}

      <Card cardClass={'card --flex-dir-column'}>
        <span className="profile-photo">
          <img src={user?.photo} alt="Profile Picture" />
        </span>
        <form className="--form-control --m" onSubmit={saveProfile}>
          <span className="profile-data">
            <p>
              <label>Name : </label>
              <input
                type="text"
                name="name"
                value={profile?.name}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <label>Email : </label>
              <input type="text" name="email" value={profile?.email} disabled />
              <br />
              <code>Email cannot be changed.</code>
            </p>
            <p>
              <label>Phone : </label>
              <input
                type="text"
                name="phone"
                value={profile?.phone}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <label>Bio : </label>
              <br />
              <textarea
                name="bio"
                value={profile?.bio}
                onChange={handleInputChange}
                cols="30"
                rows="10"
              ></textarea>
            </p>
            <p>
              <label>Photo : </label>
              <input type="file" name="image" onChange={handleImageChange} />
            </p>
            <div>
              <button type="submit" className="--btn --btn-primary">
                Edit Profile
              </button>
            </div>
          </span>
        </form>
      </Card>
      <br />
      <ChangePassword />
    </div>
  );
};

export default EditProfile;
