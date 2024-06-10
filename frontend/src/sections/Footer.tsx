import famfb from "../assets/logos/famfb_logo.png";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Linkedin from "../assets/logos/icons8-linkedin.svg";
import './Footer.css'
function Footer() {
  return (
    <section className="bg-gray-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div className="footer">
            <div>
              <img
                className="mb-4 w-36"
                src={famfb}
                alt="Light version of Famfb logo"
              />
              <p>Start spending the smart way!</p>
            </div>
            <div className="right">
              <p>Contact us</p><br />
              <p>Headquater: Oduduwa Unversity Ipetumodu, Osun State.</p>
            </div>
          </div>
          
         
          <div className="w-fit">
            
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full">
            &copy; 2024 First Access Microfinance Bank. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank">
              <img src={Twitter} alt="Twitter logo" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook logo" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src={Linkedin} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
