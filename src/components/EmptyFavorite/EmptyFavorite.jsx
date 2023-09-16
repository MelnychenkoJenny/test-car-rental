import {
  ContainerEmptyFavorite,
  EmptyFavoriteText,
} from './EmptyFavorite.styled';

export const EmptyFavorite = () => {
  return (
    <ContainerEmptyFavorite>
      <EmptyFavoriteText>
        Add your favorite cars by clicking on the heart on the right in the
        catalog
      </EmptyFavoriteText>
      <img
        src="https://res.cloudinary.com/dfye2bobn/image/upload/v1694858695/auto/im7yg7xvojme1unpqvz6.png"
        alt="cars rental"
      />
      
    </ContainerEmptyFavorite>
  );
};
