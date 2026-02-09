import { useState } from "react";
import PasswordToggle from "./ShowPassword";

const Passwordinput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="box-input">
      <PasswordToggle
        show={showPassword}
        onToggle={() => setShowPassword(prev => !prev)}
      />

      <input
        type={showPassword ? "text" : "password"}
        name="password"
        required
      />

      <label>Senha</label>
    </div>
  );
};

export default Passwordinput;