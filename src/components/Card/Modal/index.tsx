import * as S from './styles';

type CardModalProp = {
  handleClose?: () => void;
};

const CardModal = ({ handleClose }: CardModalProp) => {
  return (
    <S.BoxShadow>
      <S.BoxModal>
        <header>
          <button onClick={handleClose}>fechar</button>
        </header>
        <h1></h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          enim eros. Proin sagittis velit at augue consectetur, a dapibus turpis
          pellentesque. Aliquam efficitur sapien sapien, eget lobortis diam
          eleifend in. Fusce sagittis condimentum mi, vitae porta sapien euismod
          lobortis. Nam eget erat nec mauris aliquam dapibus. Proin nibh augue,
          imperdiet ut diam ac, faucibus sodales sapien. Donec venenatis, elit a
          mattis dictum, ipsum lacus hendrerit felis, eu mattis erat ipsum eu
          ante. Vivamus rhoncus erat quam, ut ultricies neque convallis ac. Sed
          vitae urna quis justo blandit ullamcorper. Proin rhoncus tellus ac
          arcu efficitur, tincidunt condimentum tortor laoreet. Vestibulum
          ullamcorper mauris quis diam pulvinar porta. Nullam finibus in purus a
          tincidunt. Integer tempor non dui a viverra. Morbi nulla massa,
          molestie eu rhoncus nec, elementum vitae purus. Vivamus venenatis
          pulvinar ipsum, sit amet ultricies neque. Mauris malesuada dolor eu
          sapien semper iaculis. Quisque feugiat facilisis lacus. Integer metus
          elit, venenatis at libero non, scelerisque mattis diam. Sed nisi
          lorem, mattis id fringilla at, feugiat sit amet lorem. Donec sed
          luctus ipsum, at venenatis arcu. Fusce quam ex, luctus malesuada porta
          eu, laoreet ac risus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quis convallis
          ligula, sit amet auctor nisi. Nulla facilisi. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Morbi consectetur, dui quis interdum rutrum, nisl velit dictum risus,
          consequat hendrerit mauris sapien ut ipsum. Morbi iaculis blandit
          lacus. Nunc at est iaculis, pellentesque lacus vitae, efficitur sem.
          Maecenas quis elit elementum neque scelerisque pharetra. Vestibulum
          commodo tempor mi, a mattis risus gravida sit amet. Sed hendrerit
          vitae metus vel lacinia. Maecenas cursus, dui vitae maximus maximus,
          odio libero luctus enim, id sollicitudin quam odio pretium nisl. Etiam
          eu dictum massa. Aenean vulputate dignissim mi eget efficitur. Sed
          vehicula metus tellus, vel efficitur nisi molestie et. Aenean pulvinar
          mollis convallis. Suspendisse mattis elit quam, sit amet sodales
          lectus tristique euismod. Sed mi risus, tincidunt et pulvinar quis,
          fermentum id velit. Morbi enim diam, vulputate vel ante vel, sodales
          consequat mi. Nunc scelerisque tellus nisl, quis condimentum augue
          aliquet laoreet.
        </div>
      </S.BoxModal>
    </S.BoxShadow>
  );
};
export default CardModal;
