import * as S from "./styles";
import routes from "utils/routes";
import { useState, memo } from "react";
import { navigate } from "@reach/router";
import { Button, Modal } from "components";

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
        <Button btnMenu onClick={() => navigate(routes.home)}>
          home
        </Button>
        <Button btnMenu onClick={() => navigate(routes.curriculum)}>
        Currículo
        </Button>
        <Button btnMenu onClick={() => setShowModal(true)}>
          contact
        </Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
