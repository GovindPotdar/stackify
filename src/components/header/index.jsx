import $ from 'jquery';
import './style.css';
import companyImg from '../../assets/images/company.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {

  const onClickHandler = () => {
    $(".menu-trigger").toggleClass('active');
    $('.header-area .nav').slideToggle(200);
  }

  return (
    <header className="header-area header-sticky background-header company-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="" className="logo"><img src={companyImg} alt="" /></Link>
              <ul className="nav">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about-us"
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="services"
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact-us"
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <span className='menu-trigger' onClick={onClickHandler}>
                <span>Menu</span>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
