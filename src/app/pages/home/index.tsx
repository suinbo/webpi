import React from 'react'
import './style.scss'

const Home = () => {
    return (
        <div id="wrapper" className="fade-in">
            {/* <div id="intro" className="hidden"> */}
            <div id="intro" className="">
                <h1>THIS IS <br/>MINITEST</h1>
                <p></p>
                <ul className="actions">
                    <li><a href="#header" className="">Continue</a></li>
                </ul>
            </div>

            <footer id="footer">
                <section>
                    <form>
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </form>
                </section>
                <section className="split contact">
                    <section className="alt">
                        <h3>Address</h3>
                        <p>1234 Somewhere Road #87257<br />
                        Nashville, TN 00000-0000</p>
                    </section>
                    <section>
                        <h3>Phone</h3>
                        <p><a href="#">010-2958-8046</a></p>
                    </section>
                    <section>
                        <h3>Email</h3>
                        <p><a href="#">suin9610@gmail.com</a></p>
                    </section>
                    <section>
                        <h3>Social</h3>
                        <ul className="icons alt">
                            <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                        </ul>
                    </section>
                </section>
            </footer>

            <div id="copyright">
                <ul><li>&copy; SUINBO</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
            </div>
        </div>
    )
}

export default Home