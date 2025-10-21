"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import styles from "./footer.module.css";
import { Container } from "react-bootstrap";
import SubscribeForm from "@/components/SubscribeForm";
import { useSelector } from "react-redux";

const socialLinks = [
  "https://www.facebook.com",
  "https://www.linkedin.com",
  "https://www.twitter.com",
  "https://www.youtube.com",
];

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
    { name: "Home", href: "/" },
    // { name: "Properties", href: "/properties" },
    // { name: "FAQs", href: "/faqs" },
    // { name: "Valuation Mastery", href: "/valuation-mastery" },
    // { name: "Strategic Marketing", href: "/strategic-marketing" },
    // { name: "Negotiation Wizardry", href: "/negotiation-wizardry" },
    // { name: "Closing Success", href: "/closing-success" },
    // { name: "Property Management", href: "/property-management" },
    // { name: "Contact Form", href: "/contact-form" },
    // { name: "Our Services", href: "/our-services" },
    // { name: "Terms & Conditions", href: "/terms-and-conditions" },
    // { name: "Privacy Policy", href: "/privacy-policy" },
    // { name: "Pricing", href: "/pricing" },
    // { name: "How it works", href: "/how-it-works" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.logoSection}>
            <Logo variant="footer" type="footer" />
            <p className={styles.footerDesc}>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className={styles.socialLinks}>
              {socialLinks?.map((social, index) => (
                <SocialIcon
                  key={index}
                  url={social}
                  style={{
                    height: 24,
                    width: 24,
                    margin: "0 8px",
                    cursor: "pointer",
                    opacity: 0.5,
                    fontSize: 18,
                  }}
                  fgColor="transparent"
                  bgColor="var(--text-color)"
                  target="_blank"
                  borderRadius="4px"
                  rel="noopener noreferrer"
                />
              ))}
            </div>
            {/* <div className={styles.subscribeSection}>
              <SubscribeForm />
            </div> */}
          </div>
          <div className={styles.linksSectionContainer}>
            <div className={styles.linksSection}>
              <p className={styles.link__title}>Links</p>
              {quickLinks?.slice(0, 3)?.map((item, index) => (
                <Link key={index} href={item?.href} className={styles.link}>
                  {item?.name}
                </Link>
              ))}
            </div>
            <div className={styles.linksSection}>
              <p className={styles.link__title}>Pages</p>
              {quickLinks?.slice(3, 6)?.map((item, index) => (
                <Link key={index} href={item?.href} className={styles.link}>
                  {item?.name}
                </Link>
              ))}
            </div>
            {/* <div className={styles.linksSection}>
              <p className={styles.link__title}>Contact Us</p>
              {quickLinks?.slice(10, 12)?.map((item, index) => (
                <Link key={index} href={item?.href} className={styles.link}>
                  {item?.name}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </Container>

      <Container>
        <div className={styles.bottomSection}>
          <div className={styles.bottomSectionContent}>
            <div className={styles.copyright}>
              <p>
                @{currentYear} Hospitality Connect Solutions LLC, All right
                reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
