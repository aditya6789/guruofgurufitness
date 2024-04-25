

const footerNavigationLinks = [
  {
    link: "Home",
    href: "/",
  },
  {
    link: "About Us",
    href: "about",
  },
  {
    link: "Academy",
    href: "academy",
  },
  {
    link: "Testimonials",
    href: "testimonial",
  },
  {
    link: "Contact Us",
    href: "contact",
  },
  {
    link: "Privacy Policy",
    href: "privacy-policy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-violet-900">
      <div className="flex justify-evenly items-center p-8">
        <p className="text-[14px]  w-[300px] text-white">
          Guru of Guru Fitness was founded with the core objective of fostering
          awareness and education within the fitness community. Comprising a
          team of seasoned and knowledgeable fitness professionals, our
          commitment is to deliver high-quality education through a blend of
          theoretical and practical approaches, all while maintaining adherence
          to global standards.
        </p>
        <div>
            <h3 className="font-semibold uppercase text-[20px] text-white">Navigation</h3>
            {/* <Divider className=""/> */}
          <ul className="list-disc ml-4 mt-5">
            {footerNavigationLinks.map((link, index) => (
              <li className="text-white" key={index}>{link.link}</li>
            ))}
          </ul>
        </div>
        <div>
            <h2 className="text-[20px] font-semibold uppercase text-white">Head Office</h2>
            {/* <Divider className=""/> */}
            <p className="text-white font-normal">Durga Park New Delhi 110045</p>
            <p className="text-white">E:- guruofgurufitness.com</p>
            <p className="text-white">+91 987654321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
