import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </div>
    <ul className="list-container">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <li className="list-item">
        <button type="button" className="logout-button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)
export default Header
