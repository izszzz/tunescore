import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname.startsWith("/admin"))
          return token?.user?.role === "Admin";
        return !!token;
      },
    },
  }
);
export const config = {
  matcher: [
    "/admin/:path*",
    "/musics/:path*/settings",
    "/albums/:path*/settings",
    "/bands/:path*/settings",
    "/artists/:path*/settings",
    "/thanks",
    "/pay",
    "/cart",
    "/dashboard/:path*",
  ],
};
