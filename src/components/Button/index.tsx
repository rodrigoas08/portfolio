import * as S from "./styles";

export type ButtonProps = {
    children: React.ReactChild  
};

const Button = ({children}:ButtonProps ) => <S.Wrapper>{children}</S.Wrapper>;

export default Button;
