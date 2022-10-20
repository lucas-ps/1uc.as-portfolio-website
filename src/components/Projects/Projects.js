import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Featured Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source}) =>(
          <BlogCard key={id}>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
          <UtilityList>
            <ExternalLinks href={source}> Learn more </ExternalLinks>
          </UtilityList>
          </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;