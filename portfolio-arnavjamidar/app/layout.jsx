import './globals.css'; 

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of a Computer Science student at the University of York',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}