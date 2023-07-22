import React from "react";
import "../styles/AboutPage.css";
import "../fonts.css";
function AboutPage() {
    return (
        <div id="wrapper">
            <div>
                <h2 className="header-about"
                >
                    About Nuansa
                </h2>
            </div>
            <div className="text-container-about"
            >
                <h3 className="text-about"
                >
                    NUANSA is a cultural production group based in the National
                    University of Singapore. Through contemporary musical
                    theater, NUANSA showcases the beauty and diversity of
                    Indonesian cultures. The team consistently endeavors to
                    bring the audience through an immersive journey by ensuring
                    the cultural authenticity and artistic integrity of its
                    productions.
                    <br /> <br />
                    Since their inception in 2007, they have grown from strength
                    to strength: from a small independent Indonesian performance
                    group to one of the biggest student productions in
                    Singapore, featuring a large and diverse community made up
                    of people of different nationalities.
                </h3>
            </div>
        </div>
    );
}

export default AboutPage;
