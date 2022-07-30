import React from "react"

const Navigation = () => {
    return (
        <nav id="nav">
            <ul className="links">
                <li className="active"><a href="index.html">This is Massively</a></li>
                <li><a href="generic.html">Generic Page</a></li>
                <li><a href="elements.html">Elements Reference</a></li>
            </ul>
            <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            </ul>
        </nav>
    )
}

export default Navigation