import React from 'react'

const Footer = props =>{
    return (
        <footer className="footer">
        <div className="content has-text-centered">
            <p>
            <strong>&copy; {`${new Date().getFullYear()}`}</strong> Chris LaRocque
            </p>
        </div>
    </footer>
    )
}

export default Footer