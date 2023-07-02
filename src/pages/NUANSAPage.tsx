import React from "react";
import "../index.css";
import "../fonts.css";
function NUANSAPage() {
    return (
        <div id="wrapper">
            <div
                style={{ fontFamily: "aloja", fontSize: "1.5em", margin: "0", zIndex: "1", position: "relative"}}
            >
                <h1
                    style={{
                        textAlign: "center",
                    }}
                >
                    NUANSA 2024 <br />
                    Keong Mas: Daha to Surabaya
                </h1>
            </div>
            <div style={{ display: "flex", margin: "0" }}>
                <img
                    src="/keong with leaves.png"
                    style={{
                        height: 225,
                        transform: "translate(-10vw, -30vh) rotate(15deg)"
                    }}
                ></img>
                <div style={{position: "absolute", left: "13%"}}>
                    <h1 style={{ fontSize: "1.5em", textAlign: "left", margin: 0 }}>
                        Overview
                    </h1>
                    <h3
                        style={{
                            fontFamily: "futura",
                            width: "35vw",
                            textAlign: "justify",
                            fontSize: "0.7em",
                            backgroundColor: "#9a5434",
                            padding: "0.5em",
                            borderRadius: "10px",
                        }}
                    >
                        The musical “Keong Mas: Daha to Surabaya” reimagines the
                        well-loved Javanese folklore Keong Mas. The folklore
                        tells the story of Princess Candra Kirana, who is cursed
                        into a golden snail out of her sister out of envy for
                        her engagement with Prince Inu Kertapati. The golden
                        snail is found and cared for by an elderly woman who
                        helps Candra Kirana turn back into a human. Eventually,
                        Inu Kertapati discovers Candra Kirana’s whereabouts and
                        helps her return to her kingdom. <br /> <br />
                        In “Keong Mas: Daha to Surabaya,” Candra Kirana is not
                        only transformed into a golden snail, but also displaced
                        to present-day Surabaya. Through Candra Kirana’s journey
                        of adapting to and navigating modern society, NUANSA
                        2024 explores the struggles of self-discovery and
                        finding a home.
                    </h3>
                </div>
                <div style={{position: "absolute", right: "13%", zIndex: "1"}}>
                    <h1 style={{ fontSize: "1.5em", textAlign: "right", margin: "0"}}>
                        Synopsis
                    </h1>
                    <h3
                        style={{
                            fontFamily: "futura",
                            width: "35vw",
                            textAlign: "justify",
                            fontSize: "0.7em",
                            backgroundColor: "#9a5434",
                            padding: "0.5em",
                            borderRadius: "10px",
                        }}
                    >
                        In a twist of fate, Candra Kirana, the cherished
                        princess of Daha, found herself inexplicably transported
                        to present-day Surabaya after being cursed by a witch
                        under the orders of Candra Kirana’s sister. Lost and
                        unable to find her way back to her kingdom, she met
                        Tuti, a kind-hearted university student who introduced
                        her to the modern world. <br /> <br />
                        The story follows Candra Kirana's journey of adapting
                        and navigating life in her new environment while
                        discovering her identity and calling. How will she
                        reconcile these contrasting realities? Which would
                        Candra Kirana choose? Join Candra Kirana on a
                        captivating adventure where the boundaries of time blur,
                        as she seeks to find the place she can call home.
                    </h3>
                </div>
                <img
                    src="/girl_drinks coffee.png"
                    style={{
                        height: 500,
                        position: "absolute",
                        right: "0vw",
                    }}
                ></img>
            </div>
            <div style={{transform: "translate(0%, 30vh)"}}>
                <h2 style={{ fontFamily: "brilliant", margin: "0" }}>
                    UCC Theatre - 2 March 2024*
                </h2>
                <h3
                    style={{
                        fontFamily: "futura",
                        textAlign: "right",
                        fontSize: "0.4em",
                        margin: "0",
                    }}
                >
                    *Date and Time To Be Confirmed
                </h3>
            </div>
        </div>
    );
}

export default NUANSAPage;
