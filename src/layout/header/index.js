import React, { useContext, useEffect, useRef, useState } from "react";
import { List, Dropdown, Button, Menu, Breadcrumb, Typography } from "antd";
import { Link, withRouter } from "react-router-dom";
import UserContext from "utils/oidc-context";
import { useTranslation, withTranslation } from "react-i18next";
import Modals from "components/modal/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconTransformer from "modules/services/icons.transformers";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Icons from "components/icons/index";
import "../../index.scss";
import routes from "utils/routes";
import StyledHeader, { LastUpdatesDescriptionWrapper } from "./style";
import logo from "assets/images/share/dark-logo.svg";
import help from "assets/files/cc.pdf";
import { useDispatch } from "react-redux";
import { changeMenuKey } from "store/other/sidebarMenu/action";
const { Title } = Typography;

const LayoutHeader = ({
  collapsed,
  toggle,
  announcementNum,
  menu,
  ...props
}) => {
  const { t } = useTranslation();
  const { logout, user, language, theme } = useContext(UserContext);
  const { location } = props;
  const dispatch = useDispatch();
  const updatesReporterModalRef = useRef();
  const [Updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch(`Update.json`)
      .then((r) => r.json())
      .then((data) => {
        setUpdates(data)
      })

  }, []);
  //* Show modal related to reporting last updates
  const showModal = () => {
    return updatesReporterModalRef?.current?.showModal();
  };
  const setHomePage = async () => {
    sessionStorage.setItem("menuItem", "1")
    dispatch(changeMenuKey("1"));
  };
  //* Logout
  const handleLogout = async () => {
    localStorage.clear();
    sessionStorage.clear();
    await logout();
  };

  const handleChangeMenuKey = async (page) => {
    switch (page) {
      case "announcement":
        return (sessionStorage.setItem("menuItem", "16"),
          await dispatch(changeMenuKey("16")))
      default:
        break;
    }
  }

  const menuItem = (
    <Menu>
      <Menu.Item className="text-right">
        {t("layout.welcome", {
          username: user?.profile?.name,
        })}
      </Menu.Item>
      <Menu.Item className="text-right" onClick={handleLogout}>
        {t("layout.logout")}
      </Menu.Item>
    </Menu>
  );

  //* breadcrumb
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const pathItem = routes.map((item) => {
      let path = item.path
        .split("/")
        .map((pathPart) => (pathPart.startsWith(":") ? ".*" : pathPart))
        .join("/");
      return path.padEnd(path.length + 1, "$");
    });
    const nameItem = routes.map((item) => t(item.breadcrumbName));
    var result = {};
    pathItem.forEach((key, i) => (result[key] = nameItem[i]));
    let breadcrumb =
      result[Object.keys(result).filter((key) => new RegExp(key).test(url))];

    if (breadcrumb) {
      return (
        <Breadcrumb.Item  key={url}>
          <Link to={url}>{breadcrumb}</Link>
        </Breadcrumb.Item>
      );
    }
  });
  const breadcrumbItems = [
    <Breadcrumb.Item onClick={setHomePage} key="home">
      <Link to="/">{t("Breadcrumb.Home")}</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <StyledHeader theme={theme} className="px-0">
      <div className="site-layout-header px-5">
        {menu === 1 && (
          <>
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={toggle} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={toggle} />
            )}
          </>
        )}
        {menu === 2 && (
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="logo"
              className="logo"
              width="50"
              height="50"
            />
            <Title level={5} className="d-inline-block px-3 m-0">
              شرکت ارتباطات زیرساخت
            </Title>
          </div>
        )}
        <div className="menu-wrapper">
          <a href={`${process.env.REACT_APP_SSO_BASE_URL_AUTH}`}>
            <Icons
              title={t("layout.backHome")}
              className="header-icon mx-4"
              type="home"
            />
          </a>
          <a onClick={() => showModal()}>
            <Button className="header-btn">
              <Icons
                className="header-icon mx-3"
                title={t("layout.lastUpdatesInfo")}
                type="file"
              />
            </Button>
          </a>
          <a href={help} download>
            <Icons
              title={t("layout.help")}
              className="bell-icon header-icon mx-4"
              type="download"
            />
          </a>
          <Dropdown
            overlay={menuItem}
            trigger={["click"]}
            placement="bottomCenter"
          >
            <Button className="header-btn">
              <Icons
                className="header-icon mx-3"
                type="user"
              />
            </Button>
          </Dropdown>
          <Link
            className="announcment-icon position-relative"
            to="/announcement"
            onClick={async () => await handleChangeMenuKey("announcement")}
          >
            <Icons
              className="bell-icon header-icon mx-4"
              type="bell"
            />
            {!!announcementNum && (
              <span className="announcment-notif mt-1">
                {announcementNum >= 99 ? "99+" : announcementNum}
              </span>
            )}
          </Link>
        </div>
      </div>
      <Breadcrumb
        className="p-5"
        separator={
          language === "fa" ? (
            <FontAwesomeIcon icon={iconTransformer("angle-left")} />
          ) : (
            <FontAwesomeIcon icon={iconTransformer("angle-right")} />
          )
        }
      >
        {breadcrumbItems}
      </Breadcrumb>
      <Modals
        reference={updatesReporterModalRef}
        title={t("layout.lastUpdatesInfo")}
        children={Updates.length ?
          <LastUpdatesDescriptionWrapper>
            {Updates.map(item => (
              <List
                className="flex-direction-column justify-content-start align-items-start"
                header={<Title level={3} strong>{item.updateDate}</Title>}
                bordered
              >
                {item.update.map(rec => (
                  <List.Item>
                    {rec.isNew
                      ? <Typography.Text mark strong className="ml-1">
                        [ {rec.isNew ? "جدید" : null} ]
                      </Typography.Text>
                      : null}
                    {rec.description}
                  </List.Item>
                ))
                }
              </List>
            ))}
          </LastUpdatesDescriptionWrapper>
          :
          null}
      />
    </StyledHeader>
  );
};
export default withRouter(withTranslation()(LayoutHeader));
