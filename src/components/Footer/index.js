import FacebookIcon from '../../assets/images/facebook.svg'
import TwitterIcon from '../../assets/images/twitter.svg'
import YoutubeIcon from '../../assets/images/youtube.svg'
import InstagramIcon from '../../assets/images/instagram.svg'

export default function Footer() {

    return  <div className="footer">
                <div className="footer-nav-container">
                    <div className="nav">
                        <section>
                            <span>
                                POPULAR CATEGORIES
                            </span>
                            <ul>
                                <li><a href="#">Cars</a></li>
                                <li><a href="#">Flat for rent</a></li>
                                <li><a href="#">Mobile Phones</a></li>
                                <li><a href="#">Jobs</a></li>
                            </ul>
                        </section>

                        <section>
                            <span>
                                TRENDING SEARCH
                            </span>
                            <ul>
                                <li><a href="#">Bike</a></li>
                                <li><a href="#">Watches</a></li>
                                <li><a href="#">Book</a></li>
                                <li><a href="#">Dogs</a></li>
                            </ul>
                        </section>

                        <section>
                            <span>
                                ABOUT US
                            </span>
                            <ul>
                                <li><a href="#">About EMPG</a></li>
                                <li><a href="#">OLX Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">OLX for businesses</a></li>
                            </ul>
                        </section>
                        <section>
                            <span>
                                OLX
                            </span>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Legal and Privacy Information</a></li>
                            </ul>
                        </section>
                        <section>
                            <span>
                                Follow US
                            </span>
                            <div className="social-container">
                                <a href="#"><img alt="" src={FacebookIcon}/></a>
                                <a href="#"><img alt="" src={TwitterIcon}/></a>
                                <a href="#"><img alt="" src={YoutubeIcon}/></a>
                                <a href="#"><img alt="" src={InstagramIcon}/></a>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="copyright-container">
                    <div className="copyright">
                    <span>Free Classifieds in Pakistan</span>
                    . © 2006-2021 OLX
                    </div>
                </div>


            </div>
}