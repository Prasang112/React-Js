import { Component } from "react";
export default class Footer extends Component {
    render() {
        return <>
            <footer class="container-fluid footer_section">
                <p>
                    &copy; <span id="currentYear"></span> All Rights Reserved. Design by
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </footer>
        </>
    }
}