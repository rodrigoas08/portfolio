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
    <S.Wrapper>
      <ParticlesBg
        color={theme.colors.primary}
        num={50}
        type="cobweb"
        bg={false}
      />
      <Header />
      {children}
      <Footer />
    </S.Wrapper>
  );
};

export default Wrapper;
