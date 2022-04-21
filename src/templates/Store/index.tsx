import * as S from './styles';
import { EarthImage } from 'components';

const Store = () => {
  return (
    <S.Content>
      <EarthImage width={300} height={300} />
      <h1>Esta área foi destinada para venda de produtos usados.</h1>
    </S.Content>
  );
};

export default Store;
