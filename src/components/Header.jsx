

const Header = () => {
    return (
        <div className="container-fluid">
            <header className="d-flex flex-wrap justify-content-space-around py-3 px-4 mb-1">
                <div className="d-flex flex-grow-1 align-items-center gap-3">
                    <img src="../../images/logo.jpeg" alt="logo" width="100"></img>
                    <h1 className="logo_heading">Gift Bliss</h1>
                </div>

                <ul className="nav py-4" id="linkcolor">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;