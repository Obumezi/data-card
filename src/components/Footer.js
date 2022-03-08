import Facebook from './icons/facebook-square.png';
import Github from './icons/github-square.png';
import Twitter from './icons/twitter-square.png';
import Instagram from './icons/instagram-square.png';
import Vector from './icons/Vector.png';

export function Footer() {

    return (
        <footer className="foot_container">
            <div className="content_">
                <img className="facebook" src={Facebook} alt="facebook" />
                <img className="github" src={Github} alt="github" />
                <img className="instagram" src={Instagram} alt="instagram" />
                <img className="twitter" src={Twitter} alt="twitter" />
                <img className="vector" src={Vector} alt="vector" />
            </div>

        </footer>
    )

}