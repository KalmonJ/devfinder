import React, { useContext } from 'react'
import { contexts } from '../../contexts'
import './banner.css'

const BannerFollowers = () => {
  const { perfil } = useContext(contexts)

  return (
    <div className='banner__follows'>
      <div className='container_content-flex'>
        <span className='banner--repos-label'>Repos</span>
        <span className='banner--repos-value'>{perfil.public_repos}</span>
      </div>
      <div className='container_content-flex'>
        <span className='banner--repos-label'>Followers</span>
        <span className='banner--repos-value'>{perfil.followers}</span>
      </div>
      <div className='container_content-flex'>
        <span className='banner--repos-label'>Following</span>
        <span className='banner--repos-value'>{perfil.following}</span>
      </div>
    </div>
  )
}

export default BannerFollowers