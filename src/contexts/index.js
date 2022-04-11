import React from 'react'
import { useEffect, useState } from 'react'
import { search } from '../api/github'

export const contexts = React.createContext()

export const ContextsProps = ({children}) => {
  const [perfil, setPerfil] = useState([])
  const [searching, setSearching] = useState('')
  const [profileSearched, setProfileSearched] = useState('octocat')
  const [darkMode, setDarkMode] = useState(false)


  useEffect(() => {
    search(profileSearched, setPerfil)

  }, [profileSearched])
  


  return(
    <contexts.Provider value={{
      darkMode, setDarkMode,
      searching,
      setSearching,
      setProfileSearched,
      perfil
    }}>
      {children}
    </contexts.Provider>
  )
}