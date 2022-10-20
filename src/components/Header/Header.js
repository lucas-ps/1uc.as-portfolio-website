import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style={{display: "flex", alignItems: "center", color: 'white' }}>
          <HiAcademicCap size="3rem"/> &nbsp; <Span>1uc.as</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/lucas-ps/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/lucaspsmith/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="malito:hi@1uc.as">
        <AiFillMail size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
