import * as S from "./styles";
import routes from "utils/routes";
import { Button, Modal } from "components";
import { navigate } from "@reach/router";
import { useState } from "react";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
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
