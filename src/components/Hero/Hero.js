import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import useTranslation from "next-translate/useTranslation";

const Hero = (props) => {
  let { t } = useTranslation();

  return (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       <span>{t("common:hero.welcome")} <br /> Portfolio</span> 
      </SectionTitle>
      <SectionText>
      {t("common:hero.description")}
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'} >
      {t("common:hero.savoir_plus")}</Button>
    </LeftSection>
  </Section>
)};

export default Hero;