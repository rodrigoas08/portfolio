import styled from 'styled-components';

type ImageProps = {
  width?: string | number;
  height?: string | number;
};

export const Img = styled.img`
  margin: 0 auto;
  opacity: 0.5;
  position: absolute;
  animation: rotacao 10s 5s linear infinite;

  :hover {
    animation-play-state: paused;
  }

  @keyframes rotacao {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EarthImage = ({ width, height }: ImageProps) => (
  <Img
    width={width}
    height={height}
    title="Planeta Terra"
    alt="Foto do planeta terra"
    src={`${process.env.PUBLIC_URL}/img/${'Earth.svg'}`}
  />
);
export default EarthImage;
