import React from "react";
import "../styles/NUANSAPage.css";
import "../fonts.css";
function NUANSAPage() {
    return (
        <div id="wrapper">
            <div className="container-header">
                <h1 className="header-nuansa-page">
                    NUANSA 2024 <br />
                    Keong Mas: Daha to Surabaya
                </h1>
            </div>
            <div className="container-all-nuansa">
                <div className="container-image-nuansa">
                    <img
                        className="img-keong"
                        src="/keong with leaves.png"
                    ></img>
                </div>
                <div>
                    <h1 className="subheader-left-nuansa">Overview</h1>
                    <div className="text-container-nuansa">
                        <h3 className="text-nuansa">
                            The musical “Keong Mas: Daha to Surabaya” reimagines
                            the well-loved Javanese folklore Keong Mas. The
                            folklore tells the story of Princess Candra Kirana,
                            who is cursed into a golden snail out of her sister
                            out of envy for her engagement with Prince Inu
                            Kertapati. The golden snail is found and cared for
                            by an elderly woman who helps Candra Kirana turn
                            back into a human. Eventually, Inu Kertapati
                            discovers Candra Kirana’s whereabouts and helps her
                            return to her kingdom. <br /> <br />
                            In “Keong Mas: Daha to Surabaya,” Candra Kirana is
                            not only transformed into a golden snail, but also
                            displaced to present-day Surabaya. Through Candra
                            Kirana’s journey of adapting to and navigating
                            modern society, NUANSA 2024 explores the struggles
                            of self-discovery and finding a home.
                        </h3>
                    </div>
                </div>
                <div className="spacer-nuansa"></div>
                <div>
                    <h1 className="subheader-right-nuansa">Synopsis</h1>
                    <div className="text-container-nuansa">
                        <h3 className="text-nuansa">
                            In a twist of fate, Candra Kirana, the cherished
                            princess of Daha, found herself inexplicably
                            transported to present-day Surabaya after being
                            cursed by a witch under the orders of Candra
                            Kirana’s sister. Lost and unable to find her way
                            back to her kingdom, she met Tuti, a kind-hearted
                            university student who introduced her to the modern
                            world. <br /> <br />
                            The story follows Candra Kirana's journey of
                            adapting and navigating life in her new environment
                            while discovering her identity and calling. How will
                            she reconcile these contrasting realities? Which
                            would Candra Kirana choose? Join Candra Kirana on a
                            captivating adventure where the boundaries of time
                            blur, as she seeks to find the place she can call
                            home.
                        </h3>
                    </div>
                </div>
                <div className="container-image-nuansa">
                    <img
                        className="img-girl"
                        src="/girl_drinks coffee.png"
                    ></img>
                </div>
            </div>
            <div className="container-subtext-nuansa">
                <h2 className="subtext-nuansa">UCC Theatre - 2 March 2024*</h2>
                <h3 className="subtext-nuansa">
                    *Date and Time To Be Confirmed
                </h3>
            </div>
        </div>
    );
}

export default NUANSAPage;
