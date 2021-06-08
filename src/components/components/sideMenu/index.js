import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import nav from "../../../modules/navigation";
import hieuropaLogo from "assets/img/brand/Hieuropa-logo.png";

const SideMenu = ({ menu, user }) => {
  const [navigation, setNavigation] = useState([...nav]);

  const openSubMenu = (link, index, j) => {
    console.log(1111);
    let newNavigation = navigation;
    newNavigation[index].links[j].show = !link.show;
    setNavigation([...newNavigation]);
  };

  return (
    <div className={"main-sidebar main-sidebar-sticky side-menu"}>
      <div className="sidemenu-logo">
        <NavLink
          to="/admin/dashboard"
          className="main-logo router-link-exact-active active"
          aria-current="page"
        >
          <img src={hieuropaLogo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="main-sidebar-body">
        <div className="nav">
          {navigation.map((nav, index) => (
            <div key={index}>
              <div className="nav-header">
                <span className="nav-label text-capitalize">{nav.name}</span>
              </div>
              <div>
                {nav.links.map((link, j) => {
                  return link.subMenu && link.subMenu.length ? (
                    <li
                      className={"nav-item " + (link.show ? "show" : "")}
                      key={"nav-item-with-sub-" + index + "-" + j}
                    >
                      <a
                        className="nav-link with-sub"
                        href="#"
                        onClick={() => {
                          openSubMenu(link, index, j);
                        }}
                      >
                        <span className="shape1"></span>
                        <span className="shape2"></span>
                        <i className={link.icon + " sidemenu-icon"}></i>
                        <span className="sidemenu-label text-capitalize">
                          {link.name} {link.show}
                        </span>
                        <i className="angle fe fe-chevron-right"></i>
                      </a>
                      <ul className="nav-sub">
                        {link.subMenu.map((subMenuItem, g) => (
                          <NavLink
                            tag="li"
                            to={subMenuItem.path}
                            class="nav-sub-item"
                            key={g}
                          >
                            <a
                              href="#"
                              className="nav-sub-link text-capitalize"
                            >
                              {subMenuItem.name}
                            </a>
                          </NavLink>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <NavLink
                      key={j}
                      to={link.path}
                      className="nav-item "
                      activeClassName="active"
                    >
                      <span className="nav-link">
                        <span className="shape1"></span>
                        <span className="shape2"></span>
                        <i className={link.icon + " sidemenu-icon"}></i>
                        <span className="sidemenu-label text-capitalize">
                          {link.name}
                        </span>
                      </span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.authReducer.menu,
    user: state.adminReducer.user,
  };
};

export default connect(mapStateToProps)(SideMenu);
