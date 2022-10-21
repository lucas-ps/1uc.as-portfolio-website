import React from 'react';
import {MdWork} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, ListParagraph, Picture } from './AboutStyles';

const About = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About me</SectionTitle>
    <SectionText>
    I'm someone who loves learning and tinkering, constantly playing around with stuff I don't really understand, and I think that's what lead me to want to become a Software Developer.
    Other than tech I also love sailing and cooking, but that's not really what this site's about 😆

    </SectionText>
    <List>
      <ListItem>
        <picture>
          <MdWork size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Work</ListTitle>
          <ListParagraph>
          My public software development work can be found on my Github page: github.com/lucas-ps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaUniversity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Education</ListTitle>
          <ListParagraph>
          University of Exeter - BSc, Computer Science 2020 - 2023 <br/>
          Achieved a 2:1 in both first and second year so far, on track for a 2:1 overall.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsCodeSlash size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Skills</ListTitle>
          <ListParagraph>
            Languages: <br/>
            Python, SQL, Java - 5 years <br/>
            HTML, CSS, JavaScript - 5 years <br/>
            C, C++, Go - 1 year <br/>
            French - 21 years (Bilingual)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default About;