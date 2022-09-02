import {Button} from 'antd';
import styled from "styled-components";

const StyledButton = styled(Button)`
  ${props => props.theme && `
  &.ant-btn-primary{
    color: ${props.theme?.colors?.text};
    border-color:${props.theme?.colors?.header?.bg};
    width: 150px;
    height: 40px;
  background: ${props.theme?.colors?.header?.bg};
    }
    
  `}
`;

export default (StyledButton);
