// 一个不会渲染的组件顶级容器，相当于最外面的div
import { Fragment, useContext } from "react";

import { Outlet } from "react-router-dom";
// 引入logo
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { Portrait } from "../../components/portrait/portrait.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// 登出
import { logout } from "../../utils/signout";

// import "./navigation-styles.scss";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation-styles";

const Navigation = () => {
  // 这里使用了其他模块的hook, 但是当currentUser的状态更新时，调用它的那个组件也会重新渲染
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // 登出
  const handleClick = async () => {
    const data = await logout();
    setCurrentUser(data);
    localStorage.clear();
    alert("注销成功！！");
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser || localStorage.name ? (
            <Fragment>
              <NavLink onClick={handleClick} to="/">
                SING OUT
              </NavLink>

              <Portrait />
            </Fragment>
          ) : (
            <span>
              <NavLink to="/sign-in">SIGN IN</NavLink>
              <NavLink to="/sign-up">SIGN UP</NavLink>
            </span>
          )}

          <CartIcon />
        </NavLinks>

        {/* 两边都为true才会渲染 */}
        {/* {true && <CartDropdown />} */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
