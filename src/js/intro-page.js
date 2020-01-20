class IntroPage extends React.Component {

    tagline = "A  third year computer engineering student from Newfoundland, Canada. I have 16 months of internship experienace"
    subline = "I am looking for my next adventure!"
    
    render() {
        return (
            <div className="container d-md-flex pt-5 pb-5 text-center text-md-left">
                <div>
                    <img id="id-photo" src="/src/assets/emily.svg"/>
                </div>
                <div className="mt-2 mt-md-0">
                    <h1>Hi, I'm Emily!</h1>
                    <p id="intro" className="text-wrap">
                        { this.tagline } and <strong><i>{ this.subline }</i></strong>
                    </p>
                    <nav id="downloads" className="mt-3">
                        <a className="btn main-btn remove-md-br" href="#">
                            <i className="pr-1 far fa-envelope"></i>
                            <p>ewiseman@mun.ca</p>
                        </a>
                        <a className="btn main-btn" href="#">
                            <i className="pr-1 fas fa-file-download"></i>
                            <p>Download My Resume</p>
                        </a>
                    </nav>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<IntroPage />, document.getElementById('intro-page'))