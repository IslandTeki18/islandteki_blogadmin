import React from "react";
import "./Footer.scss";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <footer className="dkFooter bg-dark">
            <Container className="text-center">
                <span className="text-muted">Footer</span>
            </Container>
        </footer>
    );
};

export default Footer;
