import { useState, useEffect } from 'react';
import router from 'next/router'
import { auth } from '../auth'

const withAuth = (props, {Component: any}) => {
  const [isAuth, setIsAuth] = useState(false)
  return () => {
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if(authUser) {
          setIsAuth(true)
        }else {
          router.push('/')
        }
      })
    }, [])

    const renderConponent = () => {
      if(isAuth) {
        return <Component {...props} />
      }
      return <h1>Loading...</h1>
    }
    return (
      renderConponent()
    )
  }
}

export default withAuth