import React, { useCallback } from "react";
import logo from "../../assets/logo-removebg.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { Path } from "react-router-dom";
import { path } from "../../ultils/constant";

const { GoPlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();

  const GoPage = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-1100 h-[70px] flex items-center justify-between bg-primary m-auto">
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          className="w-[240px] h-[70px] object-contain"
        ></img>
      </Link>
      <div className="flex items-center gap-1">
        <small>Phòng trọ 123 xin chào</small>
        <Button
          text="Đăng nhập"
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => {
            GoPage(false);
          }}
        />
        <Button
          text="Đăng kí"
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => {
            GoPage(true);
          }}
        />
        <Button
          text="Đăng tin mới"
          textColor="text-white"
          bgColor="bg-secondary2"
          Icon={GoPlusCircle}
        />
      </div>
    </div>
  );
};

export default Header;
