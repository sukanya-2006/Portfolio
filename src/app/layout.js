
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { CustomCursor } from "@/components/Navbar";

// export const metadata = {
//   title: "Sukanya | Full Stack Developer",
//   description: "Portfolio of Sukanya Bhowmick — Full Stack Developer specializing in React, Next.js, and AI-powered applications.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body style={{ margin: 0, padding: 0, background: "#141414" }}>
//         <CustomCursor />
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import Navbar from "@/components/Navbar";
import { CustomCursor } from "@/components/Navbar";

// export const metadata = {
//   title: "Sukanya Bhowmick | Full Stack Developer",
//   description: "Full Stack Developer specializing in AI/ML. Building SAFAR, ReelReady, Sarcasm Detector and more. Open to remote internships.",
//   openGraph: {
//     title: "Sukanya Bhowmick | Full Stack Developer",
//     description: "Full Stack Developer specializing in AI/ML. Open to remote internships.",
//     url: "https://portfolio-henna-nine-84.vercel.app",
//     siteName: "Sukanya Bhowmick Portfolio",
//     images: [
//       {
//         url: "/profile.jpeg",
//         width: 800,
//         height: 600,
//         alt: "Sukanya Bhowmick",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sukanya Bhowmick | Full Stack Developer",
//     description: "Full Stack Developer specializing in AI/ML. Open to remote internships.",
//     images: ["/profile.jpeg"],
//   },
// };

export const metadata = {
  metadataBase: new URL("https://portfolio-henna-nine-84.vercel.app"),
  title: "Sukanya Bhowmick | Full Stack Developer",
  description: "Full Stack Developer specializing in AI/ML. Building SAFAR, ReelReady, Sarcasm Detector and more. Open to remote internships.",
  openGraph: {
    title: "Sukanya Bhowmick | Full Stack Developer",
    description: "Full Stack Developer specializing in AI/ML. Open to remote internships.",
    url: "https://portfolio-henna-nine-84.vercel.app",
    siteName: "Sukanya Bhowmick Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 600,
        alt: "Sukanya Bhowmick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukanya Bhowmick | Full Stack Developer",
    description: "Full Stack Developer specializing in AI/ML. Open to remote internships.",
    images: ["/profile.jpeg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#141414" }}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}