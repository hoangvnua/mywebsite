import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
    return (
        <div className="container">
            <div className="banner">
                <div className="content-banner">
                    <p>WELCOME TO MY WEBSITE</p>
                    <h1>
                        Hi, I'm Nguyen Hoang <br />
                        a&nbsp;
                        <div className="gradientText">
                            <div
                                className="job"
                                data-job1="Deverloper."
                                data-job2="FrontEnd."
                            ></div>
                        </div>
                    </h1>
                    <div className="des">
                        Xin chào mọi người, ghé Mini Shop của tớ xem đồ nhé chắc
                        bạn sẽ cần đó
                    </div>
                    <div className="find">
                        <h3>FOLLOW ME</h3>
                        <ul>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="avatar">
                    <img src="../images/avt.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
