import React, { useContext } from 'react';
import { contexts } from '../../contexts';
import BannerFollowers from '../banner/banner';
import './Layout.css'

const Layout = () => {
  const { perfil } = useContext(contexts)

  console.log(perfil)

  return (
    <section className='main--container'>
      <div className='div-wrapper-content'>
        <img
          className='main_profile-img'
          src={perfil.avatar_url}
          alt='current profile img'
        />
        <div className='container-name_bio'>
          <div className='container-content'>
            <h2 className='name-content'>{perfil.name}</h2>
            <span className='login-content'>
              @{perfil.login}
            </span>
            <span className='bio-content'>
              {!perfil.bio ? "This profile has no bio"
                : perfil.bio}
            </span>
          </div>
          <span className='created-at-content'>
            Joined {perfil.created_at}
          </span>
        </div>
      </div>
      {<BannerFollowers />}
      <div className='location__company'>
        <div className='location_blog'>
          <span
            style={!perfil.location ? { color: '#A5A19A' } 
            : { color: "#fff" }}
            >
            {!perfil.location ? "Not Available"
              : perfil.location}
          </span>
          <span
            style={!perfil.blog ? { color: '#A5A19A' } 
            : { color: "#fff" }}
          >
            {!perfil.blog ? "Not Available" : perfil.blog}
          </span>
        </div>
        <div className='twitter_company'>
          <span
            style={!perfil.twitter_username ? { color: '#A5A19A' } 
            : { color: "#fff" }}
          >
            {!perfil.twitter_username ? "Not available" :
              perfil.twitter_username}
          </span>
          <span
            style={!perfil.company ? { color: '#A5A19A' } 
            : { color: "#fff" }}
          >
            {!perfil.company ? "Not Available"
              : perfil.company}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Layout