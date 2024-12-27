function FooterComponent() {
    return (
        <>
            <div className="footer__links__navigation">
                <div className="navigation__menu__item">
                    <div className="footer__link__header">
                        <h3 className="ftr-header">Social Links</h3>
                    </div>
                    <ul className="socials__links">
                        <li className="social"><a href="#">Twitter</a></li>
                        <li className="social"><a href="#">Twitch</a></li>
                        <li className="social"><a href="#">GitHub</a></li>
                        <li className="social"><a href="#">Discord</a></li>
                    </ul>
                </div>
                <div className="navigation__menu__item">
                    <div className="footer__link__header">
                        <h3 className="ftr-header">Navigation</h3>
                    </div>
                    <ul className="footer__nav__links">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">About</a></li>
                        <li className="nav-item"><a href="#">Services</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="navigation__menu__item">
                    <div className="footer__link__header">
                        <h3 className="ftr-header">Contact</h3>
                    </div>
                    <ul className="footer__contact__links">
                        <li className="contact-item"><a href="#">Email</a></li>
                        <li className="contact-item"><a href="#">Phone</a></li>
                        <li className="contact-item"><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright__title">
                <h3>SoggyMousepad &copy; 2024 • All rights reserved</h3>
            </div>
        </>
    );
}

export default FooterComponent;
