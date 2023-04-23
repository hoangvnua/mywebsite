import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaMapMarkedAlt,
} from "react-icons/fa";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

function Home() {
    const Link = ({ id, children, title, href }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        </OverlayTrigger>
    );

    return (
        <div className="container css-container">
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
                            <Link
                                href="https://www.facebook.com/hoangg117"
                                title="Facebook"
                                id="face"
                            >
                                <li>
                                    <FaFacebookF />
                                </li>
                            </Link>
                            <Link
                                href="https://www.instagram.com/hoangb117/"
                                title="Instagram"
                                id="insta"
                            >
                                <li>
                                    <FaInstagram />
                                </li>
                            </Link>
                            <Link
                                href="https://twitter.com/nguyenhoang1722"
                                title="Twitter"
                                id="twitter"
                            >
                                <li>
                                    <FaTwitter />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="avatar">
                    <img src="../images/avt.jpg" alt="" />
                </div>
            </div>

            <div className="shop">
                <div className="new-product">
                    <h2>
                        Shop <Badge bg="success">Mới</Badge>
                    </h2>
                    <div className="list-product">
                        <Card className="product" style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src="../images/background-slide.png"
                            />
                            <Card.Body className="card-body">
                                <Card.Title>
                                    Quần Short Đùi Kaki CARAMEN Form Trên Gối Co
                                    Giãn Lưng Thun Thoải Mái
                                </Card.Title>
                                <div className="sell">
                                    <div className="price">₫855</div>
                                    <div className="sales">Lượt bán: 123</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="product" style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src="../images/background-slide.png"
                            />
                            <Card.Body className="card-body">
                                <Card.Title>
                                    Áo sơ mi tay ngắn nam nữ NPV form rộng sơ mi
                                    cổ vest unisex tay lỡ, chất vải lụa mịn
                                    chống nhăn
                                </Card.Title>
                                <div className="sell">
                                    <div className="price">₫855</div>
                                    <div className="sales">Lượt bán: 123</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="product" style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src="../images/background-slide.png"
                            />
                            <Card.Body>
                                <Card.Title>
                                    Áo Polo Nam cổ V cách điệu dáng regular, áo
                                    thun nam có cổ vải cá sấu TC cao cấp
                                </Card.Title>
                                <div className="sell">
                                    <div className="price">₫855</div>
                                    <div className="sales">Lượt bán: 123</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="product" style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src="../images/background-slide.png"
                            />
                            <Card.Body className="card-body">
                                <Card.Title>
                                    THẢM TẬP YOGA VÀ TẬP GYM DÀY 4MM - THANH LÝ
                                    GIÁ RẺ
                                </Card.Title>
                                <div className="sell">
                                    <div className="price">₫855</div>
                                    <div className="sales">Lượt bán: 123</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <button className="btn-goshop">
                        Xem Thêm{" "}
                        <TbArrowBigRightFilled className="icon-right" />
                    </button>
                </div>
            </div>

            <div className="blog">
                <h3 className="title-blog">BÀI VIẾT</h3>
                <div className="card-blog">
                    <div className="card">
                        <a href="/">
                            <img src="../images/background-slide.png" alt="" />

                            <p className="icon">Xem bài viết</p>
                        </a>

                        <div className="content">
                            <div className="title">
                                <h4>
                                    10 điều cần biết khi bắt đầu học ReactJS
                                </h4>
                                <div className="time">17/10/2000</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="/">
                            <img src="../images/background-slide.png" alt="" />

                            <p className="icon">Xem bài viết</p>
                        </a>

                        <div className="content">
                            <div className="title">
                                <h4>
                                    10 điều cần biết khi bắt đầu học ReactJS
                                </h4>
                                <div className="time">17/10/2000</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="/">
                            <img src="../images/background-slide.png" alt="" />

                            <p className="icon">Xem bài viết</p>
                        </a>

                        <div className="content">
                            <div className="title">
                                <h4>
                                    10 điều cần biết khi bắt đầu học ReactJS
                                </h4>
                                <div className="time">17/10/2000</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="/">
                            <img src="../images/background-slide.png" alt="" />

                            <p className="icon">Xem bài viết</p>
                        </a>

                        <div className="content">
                            <div className="title">
                                <h4>
                                    10 điều cần biết khi bắt đầu học ReactJS
                                </h4>
                                <div className="time">17/10/2000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact">
                <h2>Liên Hệ Với Tôi</h2>
                <div className="contact-card">
                    <div className="card">
                        <div className="icon">
                            <FaMapMarkedAlt />
                        </div>
                        <Card.Title>Địa chỉ</Card.Title>
                        <Card.Text>Lạc Vệ, Tiên Du, Bắc Ninh</Card.Text>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <HiOutlineMail />
                        </div>
                        <Card.Title>Email</Card.Title>
                        <Card.Text>hoangnv1722@gmail.com</Card.Text>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <HiOutlineDevicePhoneMobile />
                        </div>
                        <Card.Title>SĐT</Card.Title>
                        <Card.Text>0582600636</Card.Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
