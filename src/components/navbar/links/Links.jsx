import { Box } from "@mui/system";
import Link from "next/link";

export default function Links() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Admin",
      path: "/admin",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];
  return (
    <Box sx={{display : 'flex',alignItems : 'center',justifyContent :'end',gap : '50px'}}>
      {links.map((item, index) => (
        <Link key={index} href={item.path}>
          {item.title}
        </Link>
      ))}
    </Box>
  );
}
