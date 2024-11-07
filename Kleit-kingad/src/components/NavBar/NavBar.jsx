import CardWidget from "./CardWidget/CardWidget";



export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid d-flex justify-content-between align-items-center">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Zapatos Formales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Zapatos Casuals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mocasines</a>
                        </li>
                        <li className="nav-link" href="#"><CardWidget/></li>
                    </ul>

                    <div id="CardWidget">

                    </div>
                </div>
            </div>
        </nav>

    )
}