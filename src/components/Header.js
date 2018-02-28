import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false
    };

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  openNav(e) {
    this.setState({
      navbarOpen: true
    });
  }
  closeNav(e) {
    this.setState({
      navbarOpen: false
    });
  }
  render() {
    const navbar__open = { left: 0, opacity: 1 };
    const navbar__closed = { left: "-75vw", opacity: 0 };
    return (
      <header className="header">
        <Link to="/home">
          <svg className="header__icon" viewBox="0 0 66 88">
            <rect x="44" y="44" width="22" height="44" />
            <rect x="0" y="0" width="66" height="22" />
            <rect x="0" y="44" width="22" height="44" />
          </svg>
        </Link>
        <div className="header__wordmark-container">
          <svg className="header__wordmark" viewBox="0 0 518 87">
            <path d="M47,0.2 L0.4,0.2 L0.4,12.8 L16.5,12.8 L16.5,66.9 L30.8,66.9 L30.8,12.8 L47,12.8 L47,0.2 Z" />
            <path d="M63.4,13.5 C48.4,13.5 36.3,25.8 36.3,40.9 C36.3,56 48.4,68.3 63.4,68.3 C78.4,68.3 90.5,56 90.5,40.9 C90.5,25.8 78.4,13.5 63.4,13.5 L63.4,13.5 Z M63.4,55.8 C55.4,55.8 48.9,49.2 48.9,41 C48.9,32.8 55.4,26.2 63.4,26.2 C71.4,26.2 77.9,32.8 77.9,41 C77.9,49.1 71.4,55.8 63.4,55.8 L63.4,55.8 Z" />
            <path d="M162,18.3 C158.6,15.1 154.2,13.5 149.4,13.5 C143.1,13.5 136.9,17.2 134.4,22.4 C132.2,17.7 127.7,13.5 119.4,13.5 C112.6,13.5 108,17.6 106.7,20.2 L106.6,20.2 L106.6,15.1 L94,15.1 L94,67 L107,67 L107,37.4 C107,31.7 109.1,25.9 116,25.9 C122.5,25.9 124.4,31.2 124.4,36.2 L124.4,67 L137.7,67 L137.7,36.7 C137.7,29.3 142.3,25.9 146.5,25.9 C151.9,25.9 155,29.7 155,36.3 L155,67.1 L168.2,67.1 L168.2,34.7 C168.2,26.2 165.2,21.2 162,18.3 L162,18.3 Z" />
            <path d="M240.7,18.3 C237.3,15.1 232.9,13.5 228.1,13.5 C221.8,13.5 215.6,17.2 213.1,22.4 C210.9,17.7 206.4,13.5 198.1,13.5 C191.3,13.5 186.7,17.6 185.4,20.2 L185.3,20.2 L185.3,15.1 L172.6,15.1 L172.6,67 L185.7,67 L185.7,37.4 C185.7,31.7 187.8,25.9 194.7,25.9 C201.2,25.9 203.1,31.2 203.1,36.2 L203.1,67 L216.4,67 L216.4,36.7 C216.4,29.3 221,25.9 225.2,25.9 C230.6,25.9 233.7,29.7 233.7,36.3 L233.7,67.1 L246.9,67.1 L246.9,34.7 C246.9,26.2 243.8,21.2 240.7,18.3 L240.7,18.3 Z" />
            <path d="M273.1,48.9 L260.6,15.1 L246,15.1 L265.6,66.2 L265.8,66.9 L258.7,86.5 L272.4,86.5 L298.6,15.1 L284.7,15.1 L273.1,48.9 Z" />
            <path d="M334.1,0.2 L334.1,43.7 C334.1,50.4 332.5,54.6 327,54.6 C323.6,54.6 321,53 318.1,50.6 L313.7,63 C316.9,65.8 322.8,68.4 328.2,68.4 C340.9,68.4 348.1,58.9 348.1,45.2 L348.1,0.3 L334.1,0.3 L334.1,0.2 Z" />
            <path d="M379,13.5 C364,13.5 351.9,25.8 351.9,40.9 C351.9,56 364,68.3 379,68.3 C394,68.3 406.1,56 406.1,40.9 C406.1,25.8 394,13.5 379,13.5 L379,13.5 Z M379,55.8 C371,55.8 364.5,49.2 364.5,41 C364.5,32.8 371,26.2 379,26.2 C387,26.2 393.5,32.8 393.5,41 C393.5,49.1 387,55.8 379,55.8 L379,55.8 Z" />
            <path d="M435.1,13.5 C430.1,13.5 424.9,16.3 422.7,20 L422.6,20 L422.6,0.2 L409.6,0.2 L409.6,66.9 L422.7,66.9 L422.7,38 C422.7,28.4 429,25.8 432.4,25.8 C436,25.8 442.2,27.4 442.2,38 L442.2,66.9 L455.5,66.9 L455.5,35.7 C455.3,20.5 444.8,13.5 435.1,13.5 L435.1,13.5 Z" />
            <path d="M485.3,13.5 C480.4,13.5 474.7,16.2 472.5,20.2 L472.4,20.2 L472.4,15.1 L459.7,15.1 L459.7,67 L472.8,67 L472.8,38 C472.8,28.4 479.1,25.8 482.5,25.8 C486.1,25.8 492.3,27.4 492.3,38 L492.3,66.9 L505.6,66.9 L505.6,35.7 C505.5,20.5 495,13.5 485.3,13.5 L485.3,13.5 Z" />
          </svg>
        </div>
        <svg
          viewBox="0 0 50 50"
          enableBackground="new 0 0 50 50"
          className="header_openNav"
          onClick={this.openNav}
        >
          <path d="M10 12h30v4H10z" />
          <path d="M10 22h30v4H10z" />
          <path d="M10 32h30v4H10z" />
        </svg>
        <nav
          className="header__navbar"
          style={this.state.navbarOpen ? navbar__open : navbar__closed}
        >
          <svg
            className="nav__close"
            viewBox="0 0 1000 1000"
            onClick={this.closeNav}
          >
            <g>
              <path d="M650.9,500L990,839L839.1,990L500,650.9L160.9,990L10,839L349.1,500L10,160.9L160.9,10L500,349.1L839.1,10L990,160.9L650.9,500z" />
            </g>
          </svg>
          <ul className="nav__list">
            <li onClick={this.closeNav}>
              <NavLink to="/home" activeClassName="nav__is-active">
                Home
              </NavLink>
            </li>
            <li onClick={this.closeNav}>
              <NavLink to="/category" activeClassName="nav__is-active">
                Category
              </NavLink>
            </li>
            <li onClick={this.closeNav}>
              <NavLink to="/product" activeClassName="nav__is-active">
                Product
              </NavLink>
            </li>
            <li onClick={this.closeNav}>
              <NavLink to="/custom" activeClassName="nav__is-active">
                Custom
              </NavLink>
            </li>
            <li onClick={this.closeNav}>
              <NavLink to="/cart" activeClassName="nav__is-active">
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
