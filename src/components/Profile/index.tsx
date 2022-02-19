import styled from 'styled-components'

type ProfileProps = {
  width?: string | number;
  height?: string | number;
};

export const Img = styled.img`
  border-radius: 50%;
`

const Profile = ({ width, height}: ProfileProps) => (
  <Img
    width={width}
    height={height}
    title="Rodrigo Sobral"
    alt="Foto perfil do Rodrigo Sobral"
    src={`${process.env.PUBLIC_URL}/img/${"eu.jpg"}`}
  />
);
export default Profile;
