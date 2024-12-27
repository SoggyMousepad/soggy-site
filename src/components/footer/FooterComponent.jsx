function FooterComponent() {
    return (
        <>
            <div className="footer__links">
                <div className="socials">
                    <ul className="socials__links">
                        <li className="social"><a href="#">Twitter</a></li>
                        <li className="social"><a href="#">Twitch</a></li>
                        <li className="social"><a href="#">GitHub</a></li>
                        <li className="social"><a href="#">Discord</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright__title">
                <h3>SoggyMousepad &copy; 2024 • All rights reserved.</h3>
            </div>
        </>
    );
}

export default FooterComponent;