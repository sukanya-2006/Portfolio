// import "./globals.css"

// export const metadata = {
//   title: "Sukanya | Frontend Developer",
//   description: "Portfolio of Sukanya — Frontend Developer open to internships",
// }

// export default function RootLayout({ children }) {
//   return (
//     // <html lang="en">
//     //   <body>{children}</body>
//     // </html>
//     <body>
//   <div className="bg-glow" />
//   {children}
//    </body>
//   )
// }







// import "./globals.css"

// export const metadata = {
//   title: "Sukanya | Frontend Developer",
//   description: "Portfolio of Sukanya",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <div className="bg-glow" />
//         {children}
//       </body>
//     </html>
//   )
// }


import "./globals.css";
import Navbar from "@/components/Navbar";
import { CustomCursor } from "@/components/Navbar";

export const metadata = {
  title: "Sukanya | Full Stack Developer",
  description: "Portfolio of Sukanya Bhowmick — Full Stack Developer specializing in React, Next.js, and AI-powered applications.",
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