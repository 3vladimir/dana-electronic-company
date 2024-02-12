/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./Footer.scss";
import brandIcon from "../../Images/logo.png";
import eitaa from "../../Images/Icons/eitaa.png";
import telegram from "../../Images/Icons/telegram.jpg";
import whatsApp from "../../Images/Icons/whatsApp.png";
import instagram from "../../Images/Icons/instagram.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="footerOuterContainer">
        <footer>
          <div className="footerInnerContainer">
            <div className="footerItemsAndLinksDivision">
              <li className="footerColumns footerBrand">
                <div className="footerBrandIcon">
                  <img width={"60%"} src={brandIcon} alt="brandicon" />
                </div>
                <br />
                <span className="footerBramdName footerItemsTitles">
                  دانا الکترونیک آرمین
                </span>
                <p
                  style={{ padding: "0" }}
                  className="footerItems footerBrandText"
                >
                  شرکت دانا الکرتونیک آرمین،در سال 1402 در جهت نصب اتوماسیون
                  گلخانه تاسیس شد
                </p>
              </li>
              <li className="footerColumns footerWithUs">
                <ul>
                  <li className="footerItems footerItemsTitles">همراه با ما</li>
                  <li className="footerItems footerLinks">
                    <Link to={"/products"}>محصولات</Link>
                  </li>
                  <li className="footerItems footerLinks">
                    <Link to={"/related-website"}>وبسایت های مرتبط</Link>
                  </li>
                  <li className="footerItems footerLinks">
                    <Link to={"/install-and-execute"}>نصب و اجرا</Link>
                  </li>
                </ul>
              </li>
              <li className="footerColumns footerContactUs">
                <ul className="footerContactList">
                  <li className="footerItems footerItemsTitles">
                    ارتباط با ما
                  </li>
                  <li className="footerItems">
                    آدرس : اصفهان،نجف آباد،خیابان 15 خرداد جنوبی جنب چهار راه
                    <br />
                    <br />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.6154104336862!2d51.35383380392261!3d32.62737627318783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbdd51afd60b501%3A0x185b7795e0db608d!2z2YbYrNmBINii2KjYp9iv!5e0!3m2!1sen!2s!4v1704102870361!5m2!1sen!2s"
                      width="600"
                      height="450"
                      style={{ width: "15em", height: "10em" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </li>
                  <li className="footerItems">
                    <div className="footerContactListItemsPhone">
                      تلفن :
                      <div style={{ textAlign: "left" }}>
                        03142655248
                        <br />
                        09371212094
                      </div>
                    </div>
                    <li className="footerItems">
                      <div className="footerContactListItemsemail">
                        ایمیل :
                        <div className="f" style={{ textAlign: "left" }}>
                          ali.amirkaveh79@gmail.com
                        </div>
                      </div>
                    </li>
                  </li>
                </ul>
              </li>
              <li className="footerColumns socialNetworks">
                <ul>
                  <li className="footerItems footerItemsTitles">
                    شبکه های اجتماعی
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    تلگرام
                    <img
                      className="footerIcons"
                      style={{ clipPath: "circle(50% at 50% 50%)" }}
                      src={telegram}
                      alt="telegram"
                    />
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    واتساپ
                    <img
                      className="footerIcons"
                      style={{ clipPath: "circle(50% at 50% 50%)" }}
                      src={whatsApp}
                      alt="whatsApp"
                    />
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    ایتا
                    <Link to={"https://web.eitaa.com/#@adolfa1889"}>
                      <img className="footerIcons" src={eitaa} alt="eitaa" />
                    </Link>
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    اینستاگرام
                    <Link to={"https://www.instagram.com/ali_amirkaveh/"}>
                      <img
                        className="footerIcons"
                        style={{
                          clipPath:
                            "polygon(15% 0, 86% 0, 100% 17%, 100% 84%, 84% 100%, 17% 100%, 0 82%, 0 15%)",
                        }}
                        src={instagram}
                        alt="instagram"
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
            <div className="footerDivider"></div>
            <div className="footerRightsManifest">
              تمامی حقوق این وبسایت متعلق به شرکت دانا الکترونیک آرمین میباشد.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
