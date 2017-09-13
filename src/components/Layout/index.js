import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Styles";
//import Header from "./Header";
//import Footer from "./Footer";
import {
  Grid,
  Header,
  Aside,
  Article,
  Footer
}
from './Grid';

export default function Layout(props) {
  return (
    <Wrapper>

      <Grid>
        <Header>Header</Header>
        <Aside>Aside</Aside>
        <Article><h1>Article</h1>
          <p>Retro live-edge tbh, vegan man braid hoodie aesthetic tattooed quinoa narwhal enamel pin cardigan plaid. Austin lumbersexual whatever roof party bushwick. Mumblecore la croix biodiesel cold-pressed, meditation hexagon normcore edison bulb cardigan adaptogen kogi art party salvia. Lyft woke blog austin man braid tousled selfies. Gluten-free photo booth blog meditation, distillery activated charcoal cardigan. Street art salvia paleo, readymade hoodie enamel pin poke iceland photo booth. Tousled disrupt pork belly migas schlitz, health goth knausgaard enamel pin PBR&B selvage. Pickled normcore woke kickstarter food truck yuccie vegan pok pok XOXO 8-bit distillery. Scenester hoodie vegan, polaroid subway tile kickstarter 90's listicle synth umami. Kitsch master cleanse messenger bag aesthetic sustainable occupy prism. Put a bird on it etsy organic, tumblr typewriter live-edge viral neutra artisan subway tile ennui roof party hashtag. Tbh skateboard pour-over helvetica typewriter humblebrag woke prism. Humblebrag yr succulents vape pinterest. Enamel pin swag twee green juice truffaut hot chicken tumblr photo booth.</p>
        </Article>
        <Footer>Footer</Footer>
      </Grid>

    </Wrapper>
  );
}

