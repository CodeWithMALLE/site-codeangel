import React from 'react';

const Footer = () => {
    return (
        <footer style={{color: "var(--linkColor)", width: "100%", position: "absolute", bottom: "0", textAlign: "center"}}>
            <div className="socialMedia">
                <p>Resaux</p>
            </div>
            <p style={{fontSize: "12px", margin: "0"}}>2023 © Moussa MALLE.</p>
            <p style={{fontSize: "12px", margin: "0", marginBottom: "8px"}}>Tous droits reservés.</p>
        </footer>
    );
}

export default Footer;
