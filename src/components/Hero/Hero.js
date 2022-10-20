import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! I'm Lucas
      </SectionTitle>
      <SectionText>
      I'm a final year Computer Science student at the University of Exeter studying Computer Science, and this is my portfolio ✨
      </SectionText>
      <Button href="#contact">Learn more</Button>
    </LeftSection>

  </section>
  
);

export default Hero;