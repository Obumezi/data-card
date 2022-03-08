import { About } from "./About"
import { Interests } from "./Interests"
import Capture from '../components/icons/Capture.PNG'

export function Content() {
    return (

        <div >

            <img className="imgclass" src={Capture} alt="React Logo" />
            <div className="container">
                <div className="details">
                    <h4 className="name">Obumneme</h4>
                    <h5 className="job_title">Frontend Developer</h5>
                    <h5 className="website_name">https://github.com/Obumezi</h5>
                    <button className="button">Email</button>

                </div>
                <div className="details">
                    <About />
                    <Interests />
                </div>

            </div>


        </div>
    )

}