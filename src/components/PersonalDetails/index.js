import './index.css'
import {FaUserAlt} from 'react-icons/fa'

const PersonalDetails = () => (
  <>
    <div className="person-details-container">
      <div className="sidebar-container">
        <div className="person-logo-container">
          <h1 className="name">Pranav Badimela</h1>
          <FaUserAlt className="person-image" />
        </div>

        <ul className="nav list-items items">
          <li className="nav-item">
            <a className="nav-link active" href="#personalDetails">
              Personal Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactDetails">
              Contact Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Emergency">
              Emergency Contacts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Dependents">
              Dependents
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#job">
              Job
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#salary">
              Salary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Qualification">
              Qualification
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="# Membership">
              Membership
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

      <div className="person-content-container">
        <h1 id="personalDetails">Personal Details</h1>
        <hr />
        <p>Employee Fullname</p>
        <div className="container1">
          <input className="input" type="text" placeholder="Pranav" />
          <input className="input" type="text" placeholder="Middle Name" />
          <input className="input" type="text" placeholder="Badimeal" />
        </div>
        <hr />
        <div className="container2">
          <div className="sub-container">
            <p>Employee Id</p>
            <input className="input" type="text" placeholder="0004" />
          </div>

          <div className="sub-container">
            <p>Other Id</p>
            <input className="input" type="text" placeholder="1234.." />
          </div>
        </div>

        <div className="container2">
          <div className="sub-container">
            <p>Driving License Number</p>
            <input className="input" type="text" placeholder="0004" />
          </div>

          <div className="sub-container">
            <p>License Expiry Date</p>
            <input className="input" type="Date" placeholder="1234.." />
          </div>
        </div>

        <hr />

        <div className="container2">
          <div className="sub-container">
            <p>Nationality</p>
            <select className="input select">
              <option>India</option>
              <option>Pakistan</option>
            </select>
          </div>

          <div className="sub-container">
            <p>Marital Status</p>
            <select className="input select">
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>
        </div>

        <div className="container2">
          <div className="sub-container">
            <p>Date Of Birth</p>
            <input className="input" type="date" placeholder="0004" />
          </div>

          <div className="sub-container">
            <p>Gender</p>
            <div className="gender-container">
              <input className="input" type="radio" />
              <p>Male</p>
              <input className="input" type="radio" />
              <p>Female</p>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <h1 id="contactDetails">Contact Details</h1>
          <p>Address</p>
          <hr />
          <div className="container2">
            <div className="sub-container">
              <p>Street 1</p>
              <input className="input" type="text" placeholder="..." />
            </div>

            <div className="sub-container">
              <p>Street 2</p>
              <input className="input" type="text" placeholder="..." />
            </div>

            <div className="sub-container">
              <p>City</p>
              <input className="input" type="text" placeholder="..." />
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="sub-container">
            <p>Street 1</p>
            <input className="input" type="text" placeholder="..." />
          </div>

          <div className="sub-container">
            <p>Street 2</p>
            <input className="input" type="text" placeholder="..." />
          </div>

          <div className="sub-container">
            <p>Country</p>
            <select className="input select">
              <option>India</option>
              <option>Pakistan</option>
            </select>
          </div>
        </div>

        <p>TelePhone</p>
        <hr />
        <div className="container2">
          <div className="sub-container">
            <p>Home</p>
            <input className="input" type="text" placeholder="..." />
          </div>

          <div className="sub-container">
            <p>Mobile</p>
            <input className="input" type="text" placeholder="..." />
          </div>

          <div className="sub-container">
            <p>Work</p>
            <input className="input" type="text" placeholder="..." />
          </div>
        </div>

        <p>Email</p>
        <hr />
        <div className="container2">
          <div className="sub-container">
            <p>Work Email</p>
            <input className="input" type="text" placeholder="..." />
          </div>

          <div className="sub-container">
            <p>Other Email</p>
            <input className="input" type="text" placeholder="..." />
          </div>
        </div>
      </div>
    </div>
  </>
)
export default PersonalDetails
