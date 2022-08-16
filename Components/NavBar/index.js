import React from "react";
import Link from "next/link";
import {
  navContainer,
  logo,
  login,
  logout,
  lNav,
  sNavContainer,
  sNav,
  openMenu,
  link1,
  mainMenu,
  closeMenu,
} from "./index.module.css";
import Image from "next/image";
import { useAppContext } from "../ContextApi";
import { auth } from "../Config/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Router from "next/router";
import { routing } from "../Config/Routing";

function NavBar() {
  
  const show = () => {
    let mainMenu = document.getElementById("mainMenu");
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  };

  const close = () => {
    let mainMenu = document.getElementById("mainMenu");
    mainMenu.style.top = "-100%";
  };

  const { authenticated, setAuthenticated } = useAppContext();

  const LogoutFun = () => { 
    close();
      signOut(auth)
      .then(() => {
        toast.warn("You have been logged out");
        setAuthenticated(false);
        Router.push('/');
      })
      .catch((error) => {
        toast.error(error)
      });
  };

  const comingSoonToaster = () => {
    toast.info("Coming soon...")
  }


  return (
    <div className="main ">
      <div className={lNav}>
        <div className={navContainer}>
          <div className="routingdiv">
            <span>
              <Link href="/">
                <a>
                  <img
                    src="/logo.png"
                    alt=""
                    className={logo}
                    width="78.4px"
                    height="28.63px"
                  />
                </a>
              </Link>
            </span>
            <span onClick={comingSoonToaster}>Partners</span>
            <Link href="#booknow">
              <a>
              <span>Book Now</span>
            </a>
            </Link>
            <span onClick={comingSoonToaster}>About</span>
            <Link href="#booknow">
              <a>
            <span>Subscribe</span>
              </a>
            </Link>
            <span onClick={comingSoonToaster}>Contact</span>
          </div>
          <div className="logindiv">
            {authenticated ? (
              <button
              className={logout}
              style={{ background: "#FFC044", fontWeight: "600" }}
              onClick={LogoutFun}
              >
              Logout
              </button>
            ) : (
              ""
              // <>
              //     <Link href={routing.LOGIN.toString()}>
              //       <button
              //         className={login}
              //         style={{ background: "white", fontWeight: "600" }}>
              //         Login
              //       </button>
              //     </Link>  
              //     <Link href={routing.SIGNUP.toString()}>
              //   <button
              //     className={logout}
              //     style={{ background: "#FFC044", fontWeight: "600" }}>
              //     Sign up
              //   </button>
              //     </Link>
              // </>
            )}
          </div>
        </div>
      </div>

      <div className={sNav}>
        <div className={sNavContainer}>
          <div className={openMenu}>
            <Link href="/">
            <a>
            <img
              src="/logo.png"
              alt=""
              className={logo}
              width="78.4px"
              height="28.63px"
                />
              </a>
            </Link>
            <Image
              src="/Vector.png"
              alt="err"
              onClick={show}
              style={{ cursor: "pointer" }}
              width="17.06px"
              height="13px"
            />
          </div>
          <div className={mainMenu} id="mainMenu">
            {authenticated ? (
              <p onClick={LogoutFun} >
                <Link href="/">
                  <a className={link1} style={{ color: "#FEBF44" }}>
                    Logout
                  </a>
                </Link>
              </p>
            ) : (
              <>
                <p onClick={close}>
                    <Link href={routing.LOGIN.toString()}>
                    <a className={link1} style={{ color: "#FEBF44" }}>
                      Login
                    </a>
                  </Link>
                </p>

                <p onClick={close}>
                    <Link href={routing.SIGNUP.toString()}>
                    <a className={link1} style={{ color: "#FEBF44" }}>
                      sign up
                    </a>
                  </Link>
                </p>
              </>
            )}
            <p onClick={close}>
              <Link href="/">
                <a className={link1} style={{ color: "white" }}>
                  Partners
                </a>
              </Link>
            </p>
            <p onClick={close}>
              <Link href="/">
                <a className={link1} style={{ color: "white" }}>
                  Book Now
                </a>
              </Link>
            </p>
            <p onClick={close}>
              <Link href="/">
                <a className={link1} style={{ color: "white" }}>
                  about
                </a>
              </Link>
            </p>
            <p onClick={close}>
              <Link href="/">
                <a className={link1} style={{ color: "white" }}>
                  Subscribe
                </a>
              </Link>
            </p>
            <p onClick={close}>
              <Link href="/">
                <a className={link1} style={{ color: "white" }}>
                  Contact
                </a>
              </Link>
            </p>
            <div className={closeMenu}>
              <Image
                src="/charm_cross.png"
                alt=""
                onClick={close}
                width="30.56px"
                height="30.56px"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ============>> Mobile Nav Container end<========== */}
    </div>
  );
}

export default NavBar;
