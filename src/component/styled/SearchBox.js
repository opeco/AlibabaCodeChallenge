import React, {useContext} from 'react';
import {Col, Row, Select} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import {Region} from "../page/services/data.transformer";
import StyledSelect from "./StyledSelect";
import UserContext from "../utils/user-context";
import StyledInput from "./StyledInput";

const {Option} = Select;

const SearchBox = ({onFilterName, onFilterRegion}) => {
    const {theme} = useContext(UserContext);

    return (
        <Row justify={'space-between'} className={'p-25'} gutter={[8, 8]}>
            <Col xs={8}>
                <StyledInput size="large"
                             theme={theme}
                             onChange={(e) => onFilterName(e.target.value)}
                             placeholder="Search for a Country ..." prefix={<SearchOutlined/>}/>
            </Col>
            <Col xs={8} className={'text-right'}>
                <StyledSelect
                    showSearch
                    placeholder="Filter by Region"
                    optionFilterProp="children"
                    theme={theme}
                    onChange={(e) => onFilterRegion(e)}
                >
                    {Region && Region.map(R => (<Option key={R.id} value={R.id}>{R.name}</Option>))}
                </StyledSelect>
            </Col>
        </Row>
    )
};

export default SearchBox;
