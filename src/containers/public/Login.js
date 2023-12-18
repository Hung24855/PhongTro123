import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InputForm, Button } from "../../components";

const Login = () => {
  const location = useLocation();
  const [isRegister, setisRegister] = useState(location.state?.flag);

  useEffect(() => {
    setisRegister(location.state?.flag);
  }, [location.state]);

  //console.log(location);
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] border rounded-sm mt-4">
      <h3 className="font-semibold text-xl mb-3">
        {isRegister ? "Đăng kí tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full">
        {isRegister && <InputForm label={"HỌ TÊN"}></InputForm>}
        <InputForm label={"SỐ ĐIỆN THOẠI"}></InputForm>
        <InputForm label={"MẬT KHẨU"}></InputForm>
        <div className="mt-3">
          <Button
            text={isRegister ? "Đăng kí" : "Đăng nhập"}
            bgColor="bg-[#3961fb]"
            textColor="text-white"
            fullWidth
          ></Button>
        </div>
      </div>
      <div className="mt-7 flex justify-between items-center">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản ?{" "}
            <span
              className="text-[blue] cursor-pointer hover:underline hover:text-[red]"
              onClick={() => {
                setisRegister(false);
              }}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer hover:underline"
              onClick={() => {
                setisRegister(true);
              }}
            >
              Tạo tài khoản
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
