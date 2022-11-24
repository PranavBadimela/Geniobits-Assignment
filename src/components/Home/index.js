import Header from '../Header'

import PersonalDetails from '../PersonalDetails'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="content-container">
      <div className="idocs-navigation bg-light">
        <img
          src="https://www.orangehrm.com/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg"
          className="login-website-logo-desktop-img"
          alt="OrangeHRM Logo"
        />
        <ul className="nav list-items">
          <li className="nav-item">
            <a className="nav-link active" href="#PIM">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Admin">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#PIM">
              PIM
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Leave">
              Leave
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Time">
              Time
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#My Info">
              My Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#DashBoard">
              DashBoard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Directory">
              Directory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Maintenance">
              Maintenance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Buzz">
              Buzz
            </a>
          </li>
        </ul>
      </div>
      <div className="idocs-content">
        <div className="container">
          <PersonalDetails />
          <hr className="divider" />
        </div>
      </div>
    </div>
  </>
)

export default Home
