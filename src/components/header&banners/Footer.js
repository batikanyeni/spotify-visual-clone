import classes from './Footer.module.css'

export const Footer = () => {


    return (
    <div className={classes['footer']}>
        <div className={classes['top-section']}>
            <img alt='spotify-logo' src='./icons/spotify-logo-1.png'></img>
            <nav className={classes['link-container']}>
                <span>COMPANY</span>
                <a href='/'>About</a>
                <a href='/'>Jobs</a>
                <a href='/'>For the Record</a>
            </nav>
            <nav className={classes['link-container']}>
                <span>COMMUNITIES</span>
                <a href='/'>For Artists</a>
                <a href='/'>Developers</a>
                <a href='/'>Advertising</a>
                <a href='/'>Investors</a>
                <a href='/'>Vendors</a>
            </nav>
            <nav className={classes['link-container']}>
                <span>USEFUL LİNKS</span>
                <a href='/'>Support</a>
                <a href='/'>Web Player</a>
                <a href='/'>Free Mobile App</a>
            </nav>
            <div className={classes['button-container']}>
                <button><img alt='instagram-button' src='./icons/inst.png'/></button>
                <button><img alt='instagram-button' src='./icons/twt.png'/></button>
                <button><img alt='instagram-button' src='./icons/face.png'/></button>
            </div>
        </div>
        <div className={classes['bottom-section']}>
            <nav className={classes['extras']}>
                <a href='/'>Legal</a>
                <a href='/'>Privacy&nbsp;Center</a>
                <a href='/'>Privacy&nbsp;Policy</a>
                <a href='/'>Cookies</a>
                <a href='/'>About&nbsp;Ads</a>
                <a href='/'>Accessibility</a>
                <a href='/'>Notice&nbsp;at&nbsp;Collection</a>
                <a href='/'>Cookies&nbsp;Settings</a>
            </nav>
            <div>
                <a href='/'><img alt='world' src='./icons/world.png'/>USA</a>
                <p>© 2023 Spotify AB</p>
            </div>

        </div>
       
    </div>)
}