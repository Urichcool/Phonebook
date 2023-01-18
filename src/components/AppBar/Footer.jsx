import {
  AppFooter,
  AppFooterText,
  AppFooterLink,
  AppFooterContainer,
} from './AppBar.styled';
import { BsGithub } from 'react-icons/bs';
import { AppContainer } from 'components/App,styled';

export const Footer = () => {
  return (
    <AppFooter>
      <AppContainer>
        <AppFooterContainer>
          <AppFooterText>2023 | Developed by </AppFooterText>
          <AppFooterLink href="https://github.com/Urichcool" target={'_blank'}>
            <BsGithub />
          </AppFooterLink>
        </AppFooterContainer>
      </AppContainer>
    </AppFooter>
  );
};
