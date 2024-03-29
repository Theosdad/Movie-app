import logo from '../logo.svg'

function Header() {
    return <nav className="green darken-2">
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
                <img src={logo} width="50" alt="" />
                <span>Movie&nbsp;App</span>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#!">Repo</a></li>
            </ul>
        </div>
    </nav>
}

export { Header }