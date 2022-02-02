type LogoProps = {
  width?: string | number;
  height?: string | number;
};

const Logo = ({ width, height }: LogoProps) => (
  <img
    width={width}
    height={height}
    title="Logo rs tecinfo"
    alt="Logo da empresa rs tecinfo"
    src={`${process.env.PUBLIC_URL}/img/${"logo-rstecinfo.svg"}`}
  />
);
export default Logo;
