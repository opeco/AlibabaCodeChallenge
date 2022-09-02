import {Input} from 'antd';
import styled from "styled-components";

const StyledInput = styled(Input)`
  ${props => props.theme && `
    &.ant-input-affix-wrapper {
        background-color: ${props.theme?.colors?.header?.bg};
    border: 1px solid ${props.theme?.colors?.header?.bg};
    .ant-input{
    background-color: ${props.theme?.colors?.header?.bg};
            color: ${props.theme?.colors?.text};

    }
    .ant-input-prefix{
        color: ${props.theme?.colors?.text};
    }
    .ant-select-arrow{
               color: ${props.theme?.colors?.text};
    }
    }
  `}
`;

export default (StyledInput);
