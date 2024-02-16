import styled from "styled-components";

const ColorPalette = () => {
  return (
    <>
      <h3>Color Palette</h3>
      <Grey100 />
      <Grey200 />
      <Grey300 />
      <Grey400 />
      <Grey500 />
      <Blue />
      <Green />
      <Red />
      <Orange />
      <Yellow />
    </>
  );
};

const Grey100 = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.grey100};
`;

const Grey200 = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.grey200};
`;

const Grey300 = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.grey300};
`;

const Grey400 = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.grey400};
`;

const Grey500 = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.grey500};
`;

const Blue = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.blue};
`;

const Green = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.green};
`;

const Red = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.red};
`;

const Orange = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.orange};
`;

const Yellow = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.yellow};
`;

export { ColorPalette };
