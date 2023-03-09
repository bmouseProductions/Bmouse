import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Entre no foguete com a gente e venha conhecer o verdadeiro Marketing
          Digital.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins max-w-[360px] font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.icon && (
                    <link.icon className="inline-block w-5 h-5 mr-2" />
                  )}
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] z-10">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Bmouse.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        <ul className="list-none flex">
          {socialMedia.map((social, index) => (
            <li
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            >
              <a href={social.link} target="_blank">
                {social.icon && social.image && (
                  <div className="flex">
                    <img
                      src={social.image}
                      alt={social.name}
                      className="inline-block w-full h-5 mr-2"
                    />
                    <social.icon className="inline-block w-full h-5" />
                  </div>
                )}
                {social.icon && !social.image && (
                  <social.icon className="inline-block w-full h-5 mr-2" />
                )}
                {!social.icon && social.image && (
                  <img
                    src={social.image}
                    alt={social.name}
                    className="inline-block w-full h-5 mr-2"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
