import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import useTranslation from "next-translate/useTranslation";

const Technologies = () => {
  let { t } = useTranslation();
  
  return (
 <Section nopadding id="technologies">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {t("common:technologie.details")}
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience {t("common:technologie.with")} <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience {t("common:technologie.with")} <br />
            Laravel
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)};

export default Technologies;
