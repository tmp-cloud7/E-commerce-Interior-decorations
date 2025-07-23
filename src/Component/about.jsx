import React from "react";
import './about.css';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                {/* Image for the banner */}
                <img src="/img/about_banner2.jpg" alt="About Banner" />
            </div>
            
            <h2>Our Story</h2>
            <h3>Established in 2024</h3>
            <p>
                With a strong innate design sense, we have been collaborating with top architects and interior stylists from all over the country, since the past 10 years, for their requirements for projects in the residential, commercial, and hospitality arenas. We are pioneers in the wholesale segment, supplying furniture, wall art, home décor, accessories, and expertise to many top business groups.
            </p>
            <p>
                With years of experience and an inborn entrepreneurial fire, we started Trillium Interiors with a belief – To make Trillium Interiors an expression of a cultivated and sophisticated lifestyle, where creativity and innovation amalgamate with luxury and fine taste.
            </p>

            <h3>Our Mission</h3>
            <p>
                Our mission at Trillium Interiors has always been to surprise and delight you with unexpected, distinctive finds for your home. We source and craft all our products with care, ensuring that any treasure you find at Trillium Interiors is unique, just like you.
            </p>

            <h3>The Future</h3>
            <p>
                Our work constantly revolves around the excellence of classic elegance and contemporary style, and around a sophisticated search of materials to ensure we bring forth personalized elegant ‘treasures’. Not swayed by fleeting trends, Trillium Interiors offers a timeless range of products that have luxury as a value and durability as a fundamental requirement. We aim to build one of the most customer-centric home decor brands, with a strong omni-channel presence across Nigeria.
            </p>
        </div>
    );
};

export default About;
