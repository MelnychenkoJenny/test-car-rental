import iconFill from 'images/heartFill.svg';
import iconGit from 'images/github.svg';
import iconLinkedin from 'images/linkedin.svg';
import { FooterStyle, FooterText, HeartIcon, Social } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <HeartIcon>
        <use href={iconFill + '#heart-fill'}></use>
      </HeartIcon>
      <FooterText>performed by Evheniia Melnychenko</FooterText>
      <Social
        to="https://github.com/MelnychenkoJenny"
        target="_blank"
        aria-label="Author github"
      >
        <svg>
          <use href={iconGit + '#git'}></use>
        </svg>
      </Social>
      <Social
        to="https://www.linkedin.com/in/yevheniia-melnychenko/"
        target="_blank"
        aria-label="Author linkedin"
      >
        <svg>
          <use href={iconLinkedin + '#linkedin'}></use>
        </svg>
      </Social>
    </FooterStyle>
  );
};
