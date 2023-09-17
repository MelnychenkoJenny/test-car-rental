import { ContainerError, TextError, ContainerFilterEmpty } from './Error.styled';
import EmptyImg from 'images/error.png';

export const Error = ({ error, emptyFilter }) => {
  return (
    <div>
       {error && <ContainerError><TextError>Oops... Something went wrong. {error} 🙄</TextError><img src={EmptyImg} alt="emptyImageCat" width="400" /></ContainerError>}
      {emptyFilter && (
        <ContainerFilterEmpty>
          <TextError>
            Oops... No car was found. Try changing the filter. 🙄
          </TextError>
          <img src={EmptyImg} alt="emptyImageCat" width="400" />
        </ContainerFilterEmpty>
      )}
     
      
    </div>
  );
};
