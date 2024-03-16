import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;

  .ContentContainer {
    /* border: solid 1px red; */
    width: 400px;
    /* height: 490px; */
    text-align: center;
  }

  .Text {
    margin-top: 80px;

    font-family: "Basis Grotesque Pro", sans-serif;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: #1a1919;
  }

  .LinkList {
    margin-top: 40px;
    display: flex;
    gap: 16px;
  }

  .Link {
    font-family: "Basis Grotesque Pro", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: #060e1e;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;

    border: 1.2px solid #d3d8dc;
    border-radius: 6px;
    padding: 0px 20px;
    width: 192px;
    height: 48px;
    cursor: pointer;

    text-decoration: none;
  }

  .UnderliningList {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .Underlining {
    border: 1px solid #e3e6e9;
    width: 186px;
    height: 0px;
  }

  .UnderliningText {
    font-family: "Basis Grotesque Pro", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    color: #bec5cc;
  }

  .Form {
    margin-top: 30px;
  }

  .Input {
    border: 1.2px solid #d3d8dc;
    border-radius: 6px;
    padding: 0px 12px;
    width: 400px;
    height: 48px;
    background: #fff;
    box-sizing: border-box;

    font-family: v "Basis Grotesque Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    color: #a1abb5;

    &:focus {
      outline: none;
    }
  }

  .SubmitButton {
    margin-top: 30px;
    border: none;

    border-radius: 8px;
    width: 400px;
    height: 48px;
    background: #316fea;

    font-family: "Basis Grotesque Pro", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 131%;
    text-align: center;
    color: #fff;
  }

  .QencodeText {
    margin-top: 30px;
    font-family: "Basis Grotesque Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    text-align: center;
    color: #060e1e;
  }

  .SingUpButton {
    margin-left: 5px;
    font-weight: 500;
    color: #316fea;
    cursor: pointer;
  }
`;
