import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from './useTheme';
import { Row, Col, Divider, Radio, Typography } from 'antd';
import { getFromLS } from 'utils/storage';
import { useTranslation, withTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconTransformer from 'modules/services/icons.transformers';

const { Title } = Typography;

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width:25px;
    height:25px;
    cursor: pointer;
    border: 1px solid #E4E4E4;
    svg{
      color:#ffffff;
      line-height: 25px;
      display: inline-block;
      vertical-align: middle;
    }
`;

const Wrapper = styled.li`
    text-align: center;
    list-style: none;
`;

const Container = styled.ul`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(5, 1fr);
    width:100%;
`;


const ThemeSelector = ({ changeTheme, setter, setMenu, menu, setCollapsed }) => {
  const { t } = useTranslation();
  const { data } = getFromLS('all-themes');
  const [themes, setThemes] = useState([]);
  const { setMode, theme: selected } = useTheme();

  const change_menu_item = [
    { label: "عمودی", value: 1 },
    { label: "افقی", value: 2 }
  ];

  //* Describe: change menu method
  const onChangeMenu = e => {
    setMenu(e.target.value);
    e.target.value === 2 && setCollapsed(false);
  };

  const themeSwitcher = selectedTheme => {
    changeTheme(selectedTheme);
    setMode(selectedTheme);
    setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(Object.keys(data));
  }, []);

  const ThemeCard = props => {
    return (
      <Wrapper>
        <ThemedButton
          onClick={() => themeSwitcher(props.theme)}
          style={{
            backgroundColor: `${data[props.theme.name].colors.button.background}`,
            color: `${data[props.theme.name].colors.button.text}`
          }}>
          {
            props.isSelected
            && <FontAwesomeIcon icon={iconTransformer('check')} />
          }
        </ThemedButton>
      </Wrapper>
    )
  }

  return (
    <>
      <Row>
        <Col xs={24}>
          <Title
            level={5}
            className="text-right mb-4 font-weight-normal"
          >{t('changeMenuPosition')} :
          </Title>
          <Radio.Group
            onChange={onChangeMenu}
            value={menu}
            options={change_menu_item}
          />
        </Col>
        <Divider />
        <Col xs={24}>
          <Title
            level={5}
            className="text-right mb-4 font-weight-normal"
          >{t('select theme color')} :
          </Title>
          <Container>
            {
              themes.length > 0 &&
              themes.map(theme => {
                const isSelected = theme === selected.name;
                return (
                  <ThemeCard
                    theme={data[theme]}
                    key={data[theme].id}
                    isSelected={isSelected}
                  />
                )
              })
            }
          </Container>
        </Col>
      </Row>
    </>
  )
}
export default withTranslation()(ThemeSelector)