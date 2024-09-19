

const NavLinks = [
    {
        label: "Dashboard",
        authRequired: false,
        href: "/",
    },
    {
        label: "Waitlist",
        authRequired: true,
        href: "/",
    }
]

export const NonUserLinks = [
    {
        label: "Signup",
        authRequired: false,
        href: "/signup",
    },
    {
        label: "Login",
        authRequired: false,
        href: "/login",
    }
]

export default NavLinks