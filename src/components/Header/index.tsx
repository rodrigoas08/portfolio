import * as S from "./styles";
import routes from "utils/routes";
import { Button, Modal } from "components";
import { navigate } from "@reach/router";
import { useState } from "react";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
      {/* se showModal for verdadeiro, exibe o modal ( o modal só aparecerá após ser clicado no botão "contact") */}
      {showModal && <Modal handleClose={() => setShowModal(false)} />}
      <S.ProfileWrapper>
        <S.ImageProfile onClick={()=> navigate(routes.home)}/>
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
