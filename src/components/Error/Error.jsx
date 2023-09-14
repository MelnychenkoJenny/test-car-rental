import { ContainerError } from './Error.styled';
import EmptyImg from 'images/error.png';

export const Error = ({ error }) => {
  return (
    <ContainerError>
      <p style={{textAlign: 'center',}}>
      Oops... Something went wrong. { error } 🙄
      </p>
      <img
        src={EmptyImg}
        alt="emptyImageCat"
        width='300'
      />
    </ContainerError>
  );
};
