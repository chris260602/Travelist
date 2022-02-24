import React, { Fragment, useState } from "react";
import classes from "./Login.module.css";
import logo from "../../assets/company_name/Travelist.svg";
import hidePass from "../../assets/img/hidePass.svg";
import showPass from "../../assets/img/showPass.svg";
const Login = () => {
  return (
    <Fragment>
      <div className={classes.mainWrapper}>
        <div className={classes.headerContainer}>
          <a href="" className={classes.logoContainer}>
            <img src={logo} alt="Travelist" />
          </a>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.leftContainer}>
            <svg
              width="655"
              height="859"
              viewBox="0 0 655 859"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id={classes.mainSVG}
            >
              <g id={classes.LeftSide}>
                <g id="BG">
                  <path
                    id="Ellipse 2"
                    d="M66.4648 234.375C103.172 234.375 132.93 203.246 132.93 164.847C132.93 126.448 103.172 95.3198 66.4648 95.3198C29.7573 95.3198 0 126.448 0 164.847C0 203.246 29.7573 234.375 66.4648 234.375Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Ellipse 1"
                    d="M604.615 532.67C632.442 532.67 655 509.072 655 479.963C655 450.855 632.442 427.257 604.615 427.257C576.789 427.257 554.231 450.855 554.231 479.963C554.231 509.072 576.789 532.67 604.615 532.67Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Ellipse 3"
                    d="M447.566 97.5626C459.703 97.5626 469.542 87.2702 469.542 74.5737C469.542 61.8773 459.703 51.5848 447.566 51.5848C435.428 51.5848 425.589 61.8773 425.589 74.5737C425.589 87.2702 435.428 97.5626 447.566 97.5626Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Ellipse 4"
                    d="M64.3209 699.76C93.3316 699.76 116.85 675.158 116.85 644.811C116.85 614.463 93.3316 589.862 64.3209 589.862C35.3101 589.862 11.7922 614.463 11.7922 644.811C11.7922 675.158 35.3101 699.76 64.3209 699.76Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Ellipse 5"
                    d="M240.131 859C276.838 859 306.596 827.872 306.596 789.473C306.596 751.074 276.838 719.945 240.131 719.945C203.423 719.945 173.666 751.074 173.666 789.473C173.666 827.872 203.423 859 240.131 859Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Ellipse 6"
                    d="M327.5 214.189C352.662 214.189 373.061 192.851 373.061 166.529C373.061 140.208 352.662 118.87 327.5 118.87C302.338 118.87 281.939 140.208 281.939 166.529C281.939 192.851 302.338 214.189 327.5 214.189Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Polygon 1"
                    d="M246.027 0L286.412 73.172H205.642L246.027 0Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Polygon 2"
                    d="M70.9962 413.949L57.9466 461.738L24.9084 426.023L70.9962 413.949Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                  <path
                    id="Polygon 3"
                    d="M568.703 95.3198L609.088 168.492H528.318L568.703 95.3198Z"
                    fill="#ED8F03"
                    fill-opacity="0.25"
                  />
                </g>
                <g id={classes.taskBox}>
                  <g id="taskbox_2" filter="url(#filter0_d_36_87)">
                    <path
                      id="Vector"
                      d="M538 117H103C97.4772 117 93 121.477 93 127V685C93 690.523 97.4772 695 103 695H538C543.523 695 548 690.523 548 685V127C548 121.477 543.523 117 538 117Z"
                      fill="#ED8F03"
                    />
                  </g>
                  <path
                    id="task1"
                    d="M477 156H248C236.954 156 228 164.954 228 176V186C228 197.046 236.954 206 248 206H477C488.046 206 497 197.046 497 186V176C497 164.954 488.046 156 477 156Z"
                    fill="white"
                  />
                  <path
                    id="tickb1"
                    d="M180 157H134C132.895 157 132 157.895 132 159V205C132 206.105 132.895 207 134 207H180C181.105 207 182 206.105 182 205V159C182 157.895 181.105 157 180 157Z"
                    fill="white"
                  />
                  <path
                    id="task3"
                    d="M477 379H248C236.954 379 228 387.954 228 399V409C228 420.046 236.954 429 248 429H477C488.046 429 497 420.046 497 409V399C497 387.954 488.046 379 477 379Z"
                    fill="white"
                  />
                  <path
                    id="task2"
                    d="M477 272H248C236.954 272 228 280.954 228 292V302C228 313.046 236.954 322 248 322H477C488.046 322 497 313.046 497 302V292C497 280.954 488.046 272 477 272Z"
                    fill="white"
                  />
                  <path
                    id="tickb3"
                    d="M179 379H133C131.895 379 131 379.895 131 381V427C131 428.105 131.895 429 133 429H179C180.105 429 181 428.105 181 427V381C181 379.895 180.105 379 179 379Z"
                    fill="white"
                  />
                  <path
                    id="tickb2"
                    d="M179 268H133C131.895 268 131 268.895 131 270V316C131 317.105 131.895 318 133 318H179C180.105 318 181 317.105 181 316V270C181 268.895 180.105 268 179 268Z"
                    fill="white"
                  />
                  <g id={classes.tick1}>
                    <path
                      id="Vector_2"
                      d="M138.11 185.125L150.36 197.375L174.86 171.125"
                      stroke="#25D366"
                      stroke-width="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id={classes.tick2}>
                    <path
                      id="Vector_3"
                      d="M138.11 293.125L150.36 305.375L174.86 279.125"
                      stroke="#25D366"
                      stroke-width="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id={classes.tick3}>
                    <path
                      id="Vector_2_2"
                      d="M138.11 404.125L150.36 416.375L174.86 390.125"
                      stroke="#25D366"
                      stroke-width="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <g id={classes.shoppingcart}>
                  <path
                    id="cart"
                    d="M583.171 699.151H413.36L421.886 681.785L563.552 681.529C568.343 681.529 572.449 678.107 573.304 673.373L592.923 563.559C593.436 560.679 592.666 557.714 590.784 555.461C589.854 554.352 588.694 553.459 587.384 552.844C586.074 552.228 584.646 551.905 583.199 551.896L402.98 551.298L401.441 544.055C400.471 539.435 396.308 536.07 391.574 536.07H347.518C344.848 536.07 342.288 537.131 340.4 539.019C338.512 540.906 337.452 543.467 337.452 546.136C337.452 548.806 338.512 551.366 340.4 553.254C342.288 555.142 344.848 556.202 347.518 556.202H383.419L390.148 588.197L406.716 668.411L385.386 703.229C384.279 704.724 383.611 706.499 383.46 708.354C383.309 710.208 383.68 712.068 384.531 713.723C386.242 717.116 389.692 719.255 393.513 719.255H411.421C407.603 724.325 405.541 730.502 405.547 736.849C405.547 752.989 418.664 766.106 434.804 766.106C450.944 766.106 464.061 752.989 464.061 736.849C464.061 730.49 461.951 724.302 458.187 719.255H504.125C500.308 724.325 498.246 730.502 498.251 736.849C498.251 752.989 511.368 766.106 527.508 766.106C543.648 766.106 556.765 752.989 556.765 736.849C556.765 730.49 554.655 724.302 550.891 719.255H583.199C588.731 719.255 593.265 714.749 593.265 709.189C593.249 706.522 592.178 703.97 590.287 702.089C588.396 700.209 585.838 699.153 583.171 699.151ZM407.172 571.145L571.365 571.686L555.282 661.739L426.306 661.967L407.172 571.145ZM434.804 745.86C429.842 745.86 425.793 741.811 425.793 736.849C425.793 731.887 429.842 727.838 434.804 727.838C439.766 727.838 443.815 731.887 443.815 736.849C443.815 739.239 442.865 741.531 441.176 743.221C439.486 744.91 437.194 745.86 434.804 745.86ZM527.508 745.86C522.546 745.86 518.497 741.811 518.497 736.849C518.497 731.887 522.546 727.838 527.508 727.838C532.47 727.838 536.519 731.887 536.519 736.849C536.519 739.239 535.57 741.531 533.88 743.221C532.19 744.91 529.898 745.86 527.508 745.86Z"
                    fill="black"
                  />
                  <rect
                    id={classes.rect1}
                    x="449"
                    y="593"
                    width="85"
                    height="20"
                    rx="10"
                    fill="#282020"
                  />
                  <rect
                    id={classes.rect2}
                    x="509"
                    y="631"
                    width="39"
                    height="20"
                    rx="10"
                    fill="#282020"
                  />
                  <rect
                    id={classes.rect3}
                    x="432"
                    y="637"
                    width="56"
                    height="20"
                    rx="10"
                    fill="#282020"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_36_87"
                  x="83"
                  y="111"
                  width="475"
                  height="598"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.929412 0 0 0 0 0.560784 0 0 0 0 0.0117647 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_36_87"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_36_87"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.formContainer}>
              <form className={classes.loginForm}>
                <h2 className={classes.loginTitle}>Login</h2>
                <div className={`${classes.formChild}`}>
                  <label>Email:</label>
                  <input type={"email"} placeholder="example@gmail.com" />
                </div>
                <div className={`${classes.formChild}`}>
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    className={classes.passwordInput}
                    type={"password"}
                    placeholder="example123"
                  />
                </div>
                <div className={classes.forgetPasswordContainer}>
                  <a href="" className={classes.forgetPassword}>
                    Forgot Password
                  </a>
                </div>
                <button className={classes.submitLogin}>Login</button>
                <div className={classes.createAccountBtnContainer}>
                  <a href="" className={classes.createAccountBtn}>
                    Don't have an account yet?
                  </a>
                </div>
              </form>
            </div>
            <div className={classes.loginFooter}>
              <p>Created by Christoper Lim, Martin & Reihan.</p>
              <p>© 2022 | Travelist</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
