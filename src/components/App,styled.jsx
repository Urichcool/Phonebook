import styled from '@emotion/styled';

export const AppContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  @media (min-width: 1700px) {
    width: 1700px;
  }
`;

export const AppLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
