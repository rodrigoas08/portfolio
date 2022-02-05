type ProfileProps = {
  width?: string | number;
  height?: string | number;
};

const Profile = ({ width, height}: ProfileProps) => (
  <img
    width={width}
    height={height}
    title="Foto perfil do Rodrigo Sobral"
    alt="Rodrigo Sobral"
    src={`${process.env.PUBLIC_URL}/img/${"profile.jpeg"}`}
  />
);
export default Profile;
