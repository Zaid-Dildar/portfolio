import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Zaid | Full-Stack Developer Portfolio",
  description:
    "Muhammad Zaid is a skilled full-stack developer with 3 years of experience in building high-performance web applications.",
  openGraph: {
    title: "Muhammad Zaid | Full-Stack Developer",
    description:
      "Explore Muhammad Zaid's portfolio showcasing high-quality web applications built with modern technologies.",
    url: "https://zaid-portfolio-site.vercel.app",
    type: "website",
    images: [
      {
        url: "https://zaid-portfolio-site.vercel.app/og-image.png",
        width: 1200,
        height: 800,
        alt: "Muhammad Zaid Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zaid | Full-Stack Developer",
    description:
      "Check out my portfolio showcasing innovative web development projects.",
    images: ["https://zaid-portfolio-site.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Zaid",
              url: "https://zaid-portfolio-site.vercel.app",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/Zaid-Dildar",
                "https://www.linkedin.com/in/zaid-dildar-8439252b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "https://contra.com/zaid_dildar_0p7f69r2",
                "https://zaiddildar0p7f69r2.contra.com/",
                "https://www.upwork.com/freelancers/~01377f4e5fc53f1b3f",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
