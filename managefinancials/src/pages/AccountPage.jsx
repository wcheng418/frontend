import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../images/v97_24.png';
import defaultProfilePic from '../images/default-profile.png';

function AccountPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(defaultProfilePic);
  
  // useEffect to fetch user data when component mounts
  useEffect(() => {
    // Comment: This would fetch user data from Spring Boot backend
    /*
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
          
        if (response.ok) {
          const userData = await response.json();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          if (userData.profilePicture) {
            setPreviewImage(`data:image/jpeg;base64,${userData.profilePicture}`);
          }
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
    */
  
    // For demo purposes - remove this when actual fetch is implemented
    setFirstName('John');
    setLastName('Doe');
    setEmail('john.doe@example.com');
  }, []);
  
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
      
    // Comment: This would save user data to Spring Boot backend
    /*
    const saveUserData = async () => {
      try {
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        if (profilePicture) {
          formData.append('profilePicture', profilePicture);
        }
  
        const response = await fetch('http://localhost:8080/api/user/profile', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        });
          
        if (response.ok) {
          alert('Profile updated successfully');
        } else {
          alert('Failed to update profile');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Error updating profile');
      }
    };
  
    saveUserData();
    */
      
    // For demo purposes
    console.log('Submitted:', { firstName, lastName, email, profilePicture });
    alert('Profile updated successfully');
  };
  return (
    <div style={{ backgroundColor: 'rgba(138,147,180,1)', minHeight: '100vh', position: 'relative' }}>
      <div style={{ 
        width: '100%', 
        height: '131px', 
        backgroundColor: 'rgba(245,243,243,1)',
        position: 'relative'
      }}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <div style={{ position: 'absolute', top: '20px', left: '40px' }}>
            {/*<h2 style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '32px', margin: 0 }}>BW</h2>
            <span style={{ fontSize: '12px', letterSpacing: '1px' }}>BUDGETWALLET</span>*/}
            <img src={myImage} alt="logo" width="100" height="100" />
          </div>
        </Link>
        {/* Navigation buttons */}
        <div style={{ display: 'flex', position: 'absolute', top: '20px', left: '220px', gap: '10px' }}>
          <Link to="/Manage Financials" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '172px', 
              height: '40px', 
              backgroundColor: '#BCC0CE', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: 'black', 
              fontFamily: 'Kaisei Decol',
              boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              cursor: 'pointer'
            }}>
              Manage Financials
            </div>
          </Link>
          <Link to="/reports" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '172px', 
              height: '40px', 
              backgroundColor: '#BCC0CE', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: 'black', 
              fontFamily: 'Kaisei Decol',
              boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              cursor: 'pointer'
            }}>
              Reports
            </div>
          </Link>
          <Link to="/financial Goals" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '172px', 
              height: '40px', 
              backgroundColor: '#BCC0CE', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: 'black', 
              fontFamily: 'Kaisei Decol',
              boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              cursor: 'pointer'
            }}>
              Financial Goals
            </div>
          </Link>
          <Link to="/account" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '172px', 
              height: '40px', 
              backgroundColor: '#3B4471', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: 'black', 
              fontFamily: 'Kaisei Decol',
              boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              cursor: 'pointer'
            }}>
              Account
            </div>
          </Link>
          <Link to="/Logout" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '172px', 
              height: '40px', 
              backgroundColor: '#BCC0CE', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: 'black', 
              fontFamily: 'Kaisei Decol',
              boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              cursor: 'pointer'
            }}>
              Logout
            </div>
          </Link>
      </div>
          <div style={{ position: 'absolute', top: '150px', left: '15px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Link to="/Account" style={{ textDecoration: 'none' }}>
              <div style={{ 
                  width: '190px', 
                  height: '80px', 
                  backgroundColor: '#3B4471', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                  cursor: 'pointer'
              }}>
                  <span style={{ fontFamily: 'Kaisei Decol', fontSize: '24px', color: '#000000' }}>Profile Settings</span>
              </div>
              </Link>
          </div>
          <div style={{ 
            position: 'absolute', 
            top: '150px', 
            left: '250px', 
            width: '750px',
            height: '500px',
            backgroundColor: '#FFFFFF',
            borderRadius: '45px',
            boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}></div>
      </div>
    </div>
  );
}

export default AccountPage;
