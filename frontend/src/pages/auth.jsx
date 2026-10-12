import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpinLoading from "../Loading/SpinLoading.jsx";
import Logo from "../assets/full_logo.png";
import { ArrowRight } from "lucide-react";
import { GoogleOutlined } from "@ant-design/icons";
import { registerUser, loginUser } from "../api's/api.js";
import { Input, Space } from "antd";
import { UserContext } from "../context/userContext";
function Auth() {
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    userId: Math.floor(Math.random() * 1000000000), // Generate a random user ID
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleLoginInputs(e) {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleRegisterInputs(e) {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value.toLowerCase(),
    }));
  }

  const LoginValidation =
    loginData.email.includes("@gmail.com") &&
    loginData.password.trim().length >= 6;
  const RegisterValidation =
    registerData.name.trim().length >= 3 &&
    registerData.email.includes("@gmail.com") &&
    registerData.password.trim().length >= 6 &&
    registerData.password === confirmPassword.toLowerCase();

  //login handler
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await loginUser(loginData);

      if (response.message == "Login successful") {
        setStatusMessage(response.message);
        console.log("Login successful:", response);
        setUserData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        setIsLoading(false);
        setTimeout(() => {
          setStatusMessage("");
          setLoginData({
            email: "",
            password: "",
          });
          navigate("/app/dashboard");
        }, 3000);
      } else {
        setIsLoading(false);
        setStatusMessage(response.message);
        setTimeout(() => {
          setStatusMessage("");
        }, 3000);
      }
    } catch (error) {
      setIsLoading(false);
      setStatusMessage("Invalid email or password");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
      console.error("Error logging in user:", error);
    }
  }
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);
  async function handleRegister(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await registerUser(registerData);
      setStatusMessage(response.message);
      setIsLoading(false);

      setTimeout(() => {
        setStatusMessage("");
        if (response.message == "User registered successfully") {
          setIsLogin(true);
          setRegisterData({
            name: "",
            email: "",
            password: "",
            userId: null,
          });
          setConfirmPassword("");
        }
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
      console.error("Error registering user:", error);
    }
  }

  function TeamIllustration() {
    const people = [
      { x: 100, color: "#818cf8", size: 44, delay: "0s" },
      { x: 195, color: "#6366f1", size: 56, delay: "0.15s" },
      { x: 290, color: "#a5b4fc", size: 44, delay: "0.3s" },
      { x: 350, color: "#4f46e5", size: 52, delay: "0.45s" },
      { x: 450, color: "#818cf8", size: 40, delay: "0.6s" },
    ];

    return (
      <svg
        viewBox="0 0 480 200"
        width="100%"
        style={{ maxWidth: 440, opacity: 0.9 }}
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Ground glow */}
        <ellipse cx="240" cy="190" rx="200" ry="20" fill="url(#glow)" />

        {people.map((p, i) => (
          <g key={i} transform={`translate(${p.x}, ${160 - p.size / 2})`}>
            {/* Body */}
            <ellipse
              cx="0"
              cy={p.size * 0.7}
              rx={p.size * 0.38}
              ry={p.size * 0.5}
              fill={p.color}
              opacity="0.85"
            />
            {/* Head */}
            <circle
              cx="0"
              cy={-p.size * 0.05}
              r={p.size * 0.28}
              fill={p.color}
            />
            {/* Subtle inner shine */}
            <circle
              cx={-p.size * 0.08}
              cy={-p.size * 0.1}
              r={p.size * 0.1}
              fill="white"
              opacity="0.18"
            />
          </g>
        ))}

        {/* Connection arcs */}
        <path
          d="M155 90 Q200 60 240 90"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        <path
          d="M240 90 Q290 55 310 90"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        <path
          d="M310 95 Q360 65 390 95"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.35"
        />

        {/* Sparkles */}
        <circle cx="60" cy="40" r="3" fill="#a5b4fc" opacity="0.6" />
        <circle cx="430" cy="30" r="2" fill="#818cf8" opacity="0.5" />
        <circle cx="200" cy="20" r="2.5" fill="#6366f1" opacity="0.4" />
      </svg>
    );
  }
  function StatChip({ icon, label, value }) {
    return (
      <div className="flex items-center gap-2.5 bg-indigo-400 backdrop-blur-sm border border-white/20 rounded-xl px-3.5 py-2.5 shadow-lg">
        <span className="text-base">{icon}</span>
        <div>
          <div
            className="text-white font-semibold text-sm leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {value}
          </div>
          <div className="text-indigo-200 text-[11px] leading-tight">
            {label}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex  w-full h-screen bg-gray-100">
        <div className="hidden md:block bg-white h-screen rounded shadow-md w-full ">
          <div className="flex flex-col  p-12 h-full">
            <div className="flex items-center justify-center w-40 h-30 gap-0">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold font-bricolage">
                Manage your <span className="text-indigo-600">workforce </span>
                with confidence.
              </h1>
              <p className="text-lg text-gray-600">
                Keep your employees, departments and workforce insights
                organized in one place.
              </p>
            </div>
            <div className="flex-col justify-center items-center  mt-10 w-full h-auto gap-0">
              {/* <img src={People} alt="People" className="w-60 h-40" /> */}
              <TeamIllustration />
              <div className="flex flex-row pl-10 gap-3 mt-5">
                <StatChip icon="👥" label="Employees" value="1,200+" />
                <StatChip icon="💼" label="Departments" value="25" />
                <StatChip icon="📊" label="Performance" value="95%" />
              </div>
            </div>
            <div className="text-md text-gray-600 mt-10">
              Workforce management, made simple.
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded h-auto md:h-screen shadow-sm w-full ">
          <div className="flex flex-col p-2  h-full justify-start  sm:mt-0 sm:justify-center items-start sm:items-center gap-0 ">
            {isLogin ? (
              <div className="flex flex-col w-full gap-3 justify-start mt-23  sm:pl-0 sm:mt-0 sm:justify-center items-center sm:items-center ">
                <div className="flex items-center justify-center  gap-0">
                  <img src={Logo} alt="Logo" className="md:hidden w-30 h-10" />
                </div>
                <div className="flex flex-col gap-3 md:w-full md:p-12 pl-7  justify-center sm:justify-start items-center sm:items-center">
                  <div className="p-3  flex flex-col w-full gap-3 md:pl-16 ">
                    <h1 className="text-3xl md:text-5xl font-bold font-bricolage text-indigo-900">
                      Welcome back
                    </h1>
                    <p className="text-gray-600">
                      Sign in to continue to your WorkZen dashboard.
                    </p>
                    <div className="w-full flex">
                      <form
                        action=""
                        className="w-68 md:w-90"
                        onSubmit={handleLogin}
                      >
                        {statusMessage && (
                          <p className="text-indigo-800 text-lg font-bold mb-2">
                            {statusMessage}
                          </p>
                        )}
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Work Email
                          </label>

                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleLoginInputs}
                            className=" border rounded border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-400  focus:shadow-outline"
                            placeholder="Email your email"
                          />
                          {loginData.email.trim().length > 0 &&
                            !loginData.email.includes("@gmail.com") && (
                              <p className="text-red-500 text-xs mt-1">
                                Please enter a valid email address.
                              </p>
                            )}
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Password
                          </label>
                          <Space vertical className="w-full text-gray-700">
                            <Input.Password
                              name="password"
                              style={{ width: "100%", padding: "0.5rem" }}
                              placeholder="input password"
                              onChange={handleLoginInputs}
                            />
                          </Space>
                          {loginData.password.trim().length > 0 &&
                            loginData.password.trim().length < 6 && (
                              <p className="text-red-500 text-xs mt-1">
                                Password must be at least 6 characters long.
                              </p>
                            )}
                        </div>
                        <div className="flex w-full items-center justify-between">
                          <button
                            type="submit"
                            className={`bg-indigo-700 w-full h-auto flex justify-center gap-1 items hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${LoginValidation ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                            disabled={!LoginValidation}
                          >
                            Sign In{" "}
                            {!isLoading && (
                              <div className="flex items-center justify-center gap-1">
                                <ArrowRight size={20} />
                              </div>
                            )}{" "}
                            {isLoading && <SpinLoading />}
                          </button>
                        </div>
                        <div className="flex mt-5 flex-row justify-center items-center gap-3 ">
                          <hr className="w-40 text-gray-400" />
                          <span className="text-gray-400">or</span>
                          <hr className="w-40 text-gray-400" />
                        </div>
                        <div className="flex  bg-indigo-700 w-full rounded-3xl mt-3">
                          <button
                            type="button"
                            className="w-full cursor-pointer  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                          >
                            <GoogleOutlined style={{ color: "white" }} /> Sign
                            In with Google
                          </button>
                        </div>
                        <div className="flex justify-center items-center mt-4">
                          <p className="text-gray-600 text-sm">
                            Don't have an account?{" "}
                            <button
                              type="button"
                              className="text-indigo-700  hover:text-indigo-900 font-bold"
                              onClick={() => setIsLogin(!isLogin)}
                            >
                              Sign Up
                            </button>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full gap-3 justify-start  sm:pl-0 sm:mt-0 sm:justify-center items-center sm:items-center ">
                <div className="flex items-center justify-center   gap-0">
                  <img src={Logo} alt="Logo" className="md:hidden w-30 h-10" />
                </div>
                <div className="flex flex-col gap-3 md:w-full md:p-12 pl-8 justify-center sm:justify-start items-center sm:items-center">
                  <div className="p-3  flex flex-col w-full gap-3 md:pl-16 ">
                    <h1 className="text-2xl md:text-3xl font-bold font-bricolage text-indigo-900">
                      Create your WorkZen account
                    </h1>
                    <p className="text-gray-600">
                      Get started with your workforce management workspace.
                    </p>
                    <div className="w-full flex">
                      <form
                        action=""
                        className="w-68 md:w-90"
                        onSubmit={handleRegister}
                      >
                        {statusMessage && (
                          <p className="text-indigo-800 text-lg font-bold mb-2">
                            {statusMessage}
                          </p>
                        )}
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={registerData.name}
                            onChange={handleRegisterInputs}
                            className=" border rounded border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
                            placeholder="Enter your name"
                          />
                          {registerData.name.trim().length <= 3 && (
                            <p className="text-red-500 text-xs mt-1">
                              Name should be at least 3 characters long.
                            </p>
                          )}
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Work Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterInputs}
                            className=" border rounded border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
                            placeholder="Email your email"
                          />
                          {registerData.email.trim().length > 0 &&
                            !registerData.email.includes("@gmail.com") && (
                              <p className="text-red-500 text-xs mt-1">
                                Please enter a valid email address.
                              </p>
                            )}
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Password
                          </label>
                          <Space vertical className="w-full text-gray-700">
                            <Input.Password
                              name="password"
                              style={{ width: "100%", padding: "0.5rem" }}
                              placeholder="input password"
                              onChange={handleRegisterInputs}
                            />
                          </Space>
                          {registerData.password.trim().length > 0 &&
                            registerData.password.trim().length < 6 && (
                              <p className="text-red-500 text-xs mt-1">
                                Password must be at least 6 characters long.
                              </p>
                            )}
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Confirm Password
                          </label>
                          <Space vertical className="w-full text-gray-700">
                            <Input.Password
                              name="confirmPassword"
                              style={{ width: "100%", padding: "0.5rem" }}
                              placeholder="input password"
                              onChange={(e) =>
                                setConfirmPassword(e.target.value.toLowerCase())
                              }
                            />
                          </Space>
                          {registerData.password !==
                            confirmPassword.toLowerCase() &&
                            confirmPassword.length > 0 && (
                              <p className="text-red-500 text-xs mt-1">
                                Password and Confirm Password do not match.
                              </p>
                            )}
                        </div>
                        <div className="flex w-full items-center justify-between">
                          <button
                            type="submit"
                            className={`bg-indigo-700 flex w-full justify-center items-center gap-1 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${RegisterValidation ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                            disabled={!RegisterValidation}
                          >
                            Register{" "}
                            {!isLoading && (
                              <div className="flex items-center justify-center gap-1">
                                <ArrowRight size={20} />
                              </div>
                            )}{" "}
                            {isLoading && <SpinLoading />}
                          </button>
                        </div>

                        <div className="flex justify-center items-center mt-4">
                          <p className="text-gray-600 text-sm">
                            Already have an account?{" "}
                            <button
                              type="button"
                              className="text-indigo-700 hover:text-indigo-900 font-bold"
                              onClick={() => setIsLogin(!isLogin)}
                            >
                              Login
                            </button>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Auth;
