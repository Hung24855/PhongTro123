import React from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] border rounded-sm mt-4">
      <h3 className="font-semibold text-xl mb-3">Đăng nhập</h3>
      <div className="w-full">
        <InputForm label={"SỐ ĐIỆN THOẠI"}></InputForm>
        <InputForm label={"MẬT KHẨU"}></InputForm>
        <div className="mt-3">
          <Button
            text="Đăng nhập"
            bgColor="bg-[#3961fb]"
            textColor="text-white"
            fullWidth
          ></Button>
        </div>
      </div>
      <div className="mt-7 flex justify-between items-center">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn quên mật khẩu
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo tài khoản
        </small>
      </div>
    </div>
  );
};

export default Login;
