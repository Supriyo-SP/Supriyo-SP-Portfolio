export const siteConfig = {
  name: "Supriyo Pal",
  title: "Full Stack Developer Portfolio",
  description:
    "Supriyo Pal is a full stack developer and Computer Science student building modern web applications with Next.js, MERN, Spring Boot, and scalable backend systems.",
  email: "supriyopal554@gmail.com",
  location: "Kolkata, India",
  keywords: [
    "Supriyo Pal",
    "full stack developer portfolio",
    "Next.js developer portfolio",
    "MERN stack developer",
    "frontend developer Kolkata",
    "backend developer India",
    "Computer Science student portfolio",
    "React developer portfolio",
  ],
  sameAs: [
    "https://github.com/Supriyo-SP",
    "https://www.linkedin.com/in/supriyo-pal-4064a6378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "https://www.instagram.com/supriyo__9/",
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Supriyo-SP",
      platform: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/supriyo-pal-4064a6378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      platform: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/supriyo__9/",
      platform: "instagram",
    },
  ],
};

export function getBaseUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) {
    return "http://localhost:3000";
  }

  const url = envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  return url.replace(/\/$/, "");
}