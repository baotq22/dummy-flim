import bannerImage from '../assets/rDJegQJaCyGaYysj2g5XWY.jpg'
import '../css/banner.css'

export const BannerMain = () => {
    return (
        <>
            <div id="banner">
                <div id='banner__image'>
                    <img src={bannerImage} className="banner" alt="logo" />
                    <div id='banner__text'>
                        <h1>Unlimited movies, TV shows, and more</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                        <input type="text" placeholder="Email address" />
                        <button type="submit" id='getStarted'>Get Started &gt;</button>
                    </div>
                </div>
            </div>
        </>
    )
}