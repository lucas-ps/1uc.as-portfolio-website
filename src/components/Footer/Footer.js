import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>@ 2022 1uc.as</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/lucas-ps/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/lucaspsmith/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="malito:hi@1uc.as">
        <AiFillMail size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;