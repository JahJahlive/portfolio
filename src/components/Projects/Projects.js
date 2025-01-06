import React, { useEffect } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import useTranslation from "next-translate/useTranslation";

const Projects = () => {
  let { t, lang } = useTranslation();

  return (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>{t("common:projets")}</SectionTitle>
    <GridContainer>
      {
        projects.map(
          ({id, description_en, description_fr, image, source, tags, title, visit}) => (
          <BlogCard>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title={title}></HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{lang === 'en' ? description_en : description_fr}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
          )
        )
      }
    </GridContainer>
  </Section>
)};

export default Projects;