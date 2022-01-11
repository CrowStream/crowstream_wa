import { Container } from 'react-bootstrap';
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";

function Footer() {
    return (
        <div className="Footer">
            <footer className="site-footer">
                <Container>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit quas aliquam, natus commodi voluptatibus magnam officiis odio cumque repudiandae accusamus nam, iste harum quo ipsam, dolores reprehenderit fugit libero.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="">C</a></li>
                                <li><a href="">UI Design</a></li>
                                <li><a href="">PHP</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="">Android</a></li>
                                <li><a href="">Templates</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Contribute</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
                                <a href="#"> CrowStream</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook"><SiFacebook/></a></li>
                                <li><a className="twitter" ><SiTwitter/></a></li>
                                <li><a className="linkedin" ><SiLinkedin/></a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;