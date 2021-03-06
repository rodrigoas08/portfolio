import './editor.css';
import * as S from './styles';
import ParticlesBg from 'particles-bg';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

type WrapperProps = {
  children: React.ReactChild;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <S.Wrapper>
      <ParticlesBg color="#00ACEE" num={50} type="cobweb" bg={false} />
      <Header />
      {children}
      <Footer />
    </S.Wrapper>
  );
};

export default Wrapper;
