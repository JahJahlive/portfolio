import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur<br />
        Mon Portfolio
      </SectionTitle>
      <SectionText>
      Je m'appelle Yannick Kobe Mbaikwo, développeur Full Stack spécialisé dans la réalisation 
      de solutions web intelligente sous Laravel / React / VueJs / NextJS / Wordpress 
      depuis 2015.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'} >En savoir plus...</Button>
    </LeftSection>
  </Section>
);

export default Hero;