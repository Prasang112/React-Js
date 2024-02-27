import { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="main">
                <section className="header">
                    <div className="left-header">
                        <h1>MYSHOP</h1>
                    </div>
                    <div className="center-header">
                        <span>HOME</span>
                        <span>ABOUT</span>
                        <span>FURNITURES</span>
                        <span>BLOG</span>
                        <span>CONTACT US</span>
                    </div>

                    <div className="right-header">
                        <span>LOGIN </span>
                        &nbsp;
                        <img src="icon-4.png" />
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <img src="" />
                    </div>
                </section>
            </div>
        )
    }
}
export default Header;

