import './index.css'
import {FaUserAlt} from 'react-icons/fa'

const Header = () => (
  <nav className="nav-header">
    <div className="logo-container">
      <img
        src="https://www.orangehrm.com/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg"
        className="login-website-logo-desktop-img"
        alt="OrangeHRM Logo"
      />
    </div>
    <div className="nav-content">
      <h3 className="text">PIM</h3>
      <div className="icon-container">
        <FaUserAlt className="icon" />
        <p className="text">Hello</p>
      </div>
    </div>
  </nav>
)
export default Header
