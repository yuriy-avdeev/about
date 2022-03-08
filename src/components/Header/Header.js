import { memo } from 'react'
import { useHistory  } from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = memo(() => {
  const history = useHistory()

  return (
    <header className='header'>
        <img className='header__logo' src={logo} onClick={() => history.push('/')} alt='логотип' />
    </header >
  )
})

export default Header
