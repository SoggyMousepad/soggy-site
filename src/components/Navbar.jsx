function Navbar() {
    return (

        <>
        <div className="navigation__bar">
            <ul>
                <li className="float-left"> <a href="#"> <i class="ri-home-2-fill"></i>Home</a></li>
                <li><a href="https://github.com/soggymousepad"> <i class="ri-file-text-fill"></i> Projects</a></li>
                <li><a href="https://twitter.com/soggymousepad"> <i class="ri-twitter-x-line"></i> Twitter</a></li>
                <li><a href="https://twitch.tv/soggymousepad"> <i class="ri-twitch-fill"></i> Twitch</a></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;