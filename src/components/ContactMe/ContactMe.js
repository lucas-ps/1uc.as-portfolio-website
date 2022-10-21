import React, { useState } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ExternalLinks } from '../Projects/ProjectsStyles';

const ContactMe = () => (
    <Section nopadding id="contact">
        <SectionDivider divider />
        <SectionTitle>Get in touch!</SectionTitle>
        <SectionText>
            Feel free to contact me on LinkedIn or email me directly at hi@1uc.as
            <br/>
            <br/>
            <ExternalLinks href={"mailto:hi@1uc.as"}> Email </ExternalLinks>&nbsp;&nbsp;&nbsp;&nbsp;
            <ExternalLinks href={"https://docs.google.com/document/d/1delzPUAkiSWBWcHLQGKAQtZrDxeFcG5ImIscT0UgIjM/edit?usp=sharing"}> My CV </ExternalLinks>

        </SectionText>
    </Section>
);

export default ContactMe;