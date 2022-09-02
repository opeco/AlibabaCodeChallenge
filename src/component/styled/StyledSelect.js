import {Select} from 'antd';
import styled from "styled-components";

const StyledSelect = styled(Select)`
  ${props => props.theme && `
    &.ant-select{
    .ant-select-selector{
        background: ${props.theme?.colors?.header?.bg};
    border: 1px solid ${props.theme?.colors?.header?.bg};
    }
    .ant-select-selection-search-input{
        color: ${props.theme?.colors?.text};
    }
    .ant-select-arrow{
               color: ${props.theme?.colors?.text};
    }
    }
  `}
`;

export default (StyledSelect);
