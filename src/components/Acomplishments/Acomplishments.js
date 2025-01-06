import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import useTranslation from "next-translate/useTranslation";

const data = [
  { number: 20, text_fr: "Projets Open Source", text_en: 'Open Source Projects'},
  { number: 1000, text_fr: "Etudiants", text_en: 'Students', },
  { number: 1900, text_fr: "Abonnes Github", text_en: 'Github Followers', },
  { number: 5000, text_fr: "Github Etoiles", text_en: 'Github Stars', }
];

const Acomplishments = () => {
  let { t, lang } = useTranslation();

  return (
  <Section>
    <SectionTitle>Accomplissements</SectionTitle>
    <Boxes>
      {data.map(({number, text_en, text_fr}, index) => (
        <Box key={index}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{lang === 'en' ? text_en : text_fr}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)};

export default Acomplishments;
