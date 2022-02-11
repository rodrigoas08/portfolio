import * as S from "./styles";
import routes from "utils/routes";
import { Button, Modal } from "components";
import { navigate } from "@reach/router";
import { useState } from "react";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(true)
  }

  return (
    <S.Wrapper>
      {showModal && (<Modal setShowModal={() => handleModal} />)}
      <S.ProfileWrapper>
        <S.ImageProfile />
        {/* <S.Nome>Rodrigo Sobral</S.Nome> */}
      </S.ProfileWrapper>
      <S.NavWrapper>
        <Button secondary onClick={() => navigate(routes.home)}>
          home
        </Button>
        <Button secondary onClick={() => navigate(routes.portfolio)}>
          portfolio
        </Button>
        <Button secondary onClick={() => setShowModal(true)}>
          contact
        </Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
