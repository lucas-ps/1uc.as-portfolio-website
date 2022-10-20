import React from 'react';
import {MdWork} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Picture } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Experience</SectionTitle>
    <List>
      <ListItem>
        <Picture>
          <MdWork size="3rem" />
        </Picture>
        <ListContainer>
          <ListTitle>Work</ListTitle>
          <ListParagraph>
          My public software development work can be found on my Github page: github.com/lucas-ps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Picture>
          <FaUniversity size="3rem" />
        </Picture>
        <ListContainer>
          <ListTitle>Education</ListTitle>
          <ListParagraph>
          University of Exeter - BSc, Computer Science 2020 - 2023
          Achieved a 2:1 in both first and second year so far, on track for a 2:1 overall.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Picture>
          <BsCodeSlash size="3rem" />
        </Picture>
        <ListContainer>
          <ListTitle>Skills</ListTitle>
          <ListParagraph>
            Coding: <br/>
            Python, SQL, Java - 5 years <br/>
            HTML, CSS, JavaScript - 5 years <br/>
            C, C++, Go - 1 year <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
