import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import useTranslation from "next-translate/useTranslation";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { useRouter } from "next/router";
import { US, FR } from 'country-flag-icons/react/3x2';

const Header = () => { 
  let router = useRouter();
  let { t, lang } = useTranslation();
  
  return (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem" /> <Span >Yannick Kobe</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>{t("common:projets")}</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>{t("common:a_propos")}</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/jahjahlive'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/yannickkobe'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <Link href={router.asPath} locale={lang === 'en' ? 'fr' : 'en'}><a style={{ color: 'white'}}>{
      lang === 'en' ? <FR title="fr" className="..." height="1rem" /> 
      : <US title="en" className="..." height="1rem" /> }</a></Link>
    </Div3>
  </Container>
)};

export default Header;
