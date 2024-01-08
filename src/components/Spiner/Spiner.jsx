import { Blocks } from 'react-loader-spinner';
import { SpinerDiv } from './Spiner.styled';

const Spiner = () => {
  return (
    <SpinerDiv>
      <Blocks
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </SpinerDiv>
  );
};

export default Spiner;
