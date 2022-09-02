import { Layout } from 'antd';
import styled from "styled-components";

const { Header } = Layout;
const StyledHeader = styled(Header)`
  ${props => props.theme && `
    &.ant-layout-header{
      .site-layout-header{
        background: ${props.theme?.colors?.header?.bg};
        .logo-wrapper{
          filter:${props.theme?.colors?.logo}
          zoom:0.75;
          display: flex;
          height: 100%;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  `}
`;

export const LastUpdatesDescriptionWrapper= styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  max-height: 450px;
  overflow: auto;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 25px;

  >h1{
    font-size: 20px;
    font-weight: bold;
  }
  >h2{
    font-size: 20px;
    padding-top: 20px;
    font-weight: bold;
  }
  
  >div{
    display: flex;
    align-items: center;
    padding-top: 15px;

    >span{
      font-size: 16px;
      padding-right: 8px;
      font-weight: bold;
    }
    >svg{
      font-size: 10px;
      width: 10px;
    }
  }
`
export default (StyledHeader);