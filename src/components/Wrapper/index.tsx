import './editor.css';
import * as S from './styles';
import ParticlesBg from 'particles-bg';
import { Header, Footer } from 'components';
import theme from 'styles/theme';

type WrapperProps = {
  children: React.ReactChild;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <ParticlesBg
          color={theme.colors.primary}
          num={50}
          type="cobweb"
          bg={false}
        />
        {children}
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Wrapper;
