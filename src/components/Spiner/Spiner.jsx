import { Vortex } from 'react-loader-spinner';
import { SpinerDiv } from './Spiner.styled';

const Spiner = () => {
  return (
    <SpinerDiv>
      <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </SpinerDiv>
  );
};

export default Spiner;
