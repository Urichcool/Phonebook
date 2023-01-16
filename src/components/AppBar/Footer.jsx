import { AppFooter, AppFooterText, AppFooterLink } from './AppBar.styled';
import { BsGithub } from 'react-icons/bs';

export const Footer = () => {
  return (
    <AppFooter>
      <AppFooterText>2023 | Developed by Yurii Novikov |</AppFooterText>
      <AppFooterLink href="https://github.com/Urichcool" target={'_blank'}>
        <BsGithub />
      </AppFooterLink>
    </AppFooter>
  );
};
