import { Container } from "components/SharedLayout/SharedLayout.styled";
import styled from "styled-components";

export const ContainerError = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
padding: 30px;
width: 50%;
background-color: ${({ theme: { colors } }) => colors.bgAlfa};
`