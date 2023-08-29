import callToICons from "../assets/central-icons.png";

function CallToAction () {
    return (
    <div className="call-to-container">
        <img src={callToICons} alt="Illustration for Call To Action"/>
        <div className="call-to-text-container">
            <h1>Consultores teconológicos</h1>
            <h4>Especialitas en desarrollo</h4>
            <button>Te llamamos </button>
        </div>
    </div>
    );
}

export default CallToAction