import "./Banner.scss";
const Banner = () => {
    const hyperlink = () => {
        window.location.href = "https://fasal-fusion-new.vercel.app/";
    };
    const hyperlinktwo = () => {
        window.location.href = "./realtimegraphs";
    };
    return (<div className="hero-banner"><div className="content">
        <div className="text-content">
        <h1 style={{fontSize: '80px'}}>SMART IRRIGATE</h1>
        <p>An Algorithmic Solution for Water Management
        </p>
        <div className="ctas">
            <button className="banner-cta" onClick={hyperlink}>Predict your Crop by Fasal Fusion</button>
            <button className="banner-cta v2" onClick={hyperlinktwo}>View Device</button>
        </div>
        </div>
        </div>
        </div>);
};
export default Banner;
