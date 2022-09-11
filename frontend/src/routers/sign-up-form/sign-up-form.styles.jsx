import styled from "styled-components";

export const SignUpMain = styled.main`
  background-image: url("../../../public/img/background.jpg");
  background-size: contain;
  @media (max-width: 900px) {
    background-size: cover;
  }
  width: 100%;
  height: 88vh;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  position: relative;
`;

export const SignUpFormStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  height: 65%;
  width: 60%;
  @media (max-width: 900px) {
    font-size: 0.8rem;
    width: 70%;
    height: 65%;
  }
`;

export const SignUpFormHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right, #7dd56f, #28b487);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
  &:hover {
    transform: rotate(3deg);
  }
`;
