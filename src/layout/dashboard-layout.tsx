import React, { useEffect, useState } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import {
  BellIcon,
  MenuIcon,
  MessageCircleDashedIcon,
  LucideBuilding2,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import FloatingActionButton from "@/components/custom/floating-action-btn";
import CommandPalette from "@/components/custom/search-box";
import DashboardFooter from "@/components/custom/dashboard-footer";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const DashboardLayout: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const location = useLocation();

  const [, setIsDarkMode] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
    setLoading(false);
  }, []);

  // Keyboard shortcut Cmd+J or Ctrl+J
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-zinc-300 dark:bg-zinc-800">
        Loading...
      </div>
    );
  }

  const navLinks = [
    { href: "", label: "Overview" },
    { href: "jobs", label: "Jobs" },
    { href: "students", label: "Students" },
    { href: "courses", label: "Courses" },
    { href: "members", label: "Members" },
    { href: "find-talent", label: "Find Talent" },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden dark:bg-black">
      {/* Header */}
      <header className="flex items-center justify-between p-3 px-6 border-b border-zinc-300 dark:border-zinc-900 fixed top-0 left-0 right-0 bg-white dark:bg-black z-10">
        {/* Logo and Navigation Links */}
        <div className="flex items-center justify-start flex-1">
          <Link to="/" className="text-[var(--brand)] mr-5 text-lg font-semibold">
            On Campus
          </Link>

          {/* Desktop Navigation using NavigationMenu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {navLinks.map(({ href, label }) => {
                  const isActive =
                    location.pathname === `/${href}` || (href === "" && location.pathname === "/");

                  return (
                    <NavigationMenuItem key={href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={`/${href}`}
                          className={`text-sm font-light px-2 py-1 rounded transition-colors ${isActive
                              ? "text-black dark:text-white"
                              : "text-gray-400 dark:text-zinc-500 hover:text-[var(--brand)] dark:hover:text-[var(--brand)]"
                            }`}
                        >
                          {label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>


        {/* Icons */}

        <div className="flex items-center gap-2  justify-center">
          <div className="hidden md:flex items-center justify-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <SearchIcon className="h-6 w-6 text-gray-600 dark:text-white" />
            </Button>
            <Link to={`/org/12345`}>
              <Button variant="ghost" size="icon">
                <LucideBuilding2 className="h-6 w-6 text-gray-600 dark:text-white" />
              </Button>
            </Link>
            <div className="h-5">
              <Separator orientation="vertical" />
            </div>
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageCircleDashedIcon className="h-6 w-6 text-gray-600 dark:text-white" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="h-6 w-6 text-gray-600 dark:text-white" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </Button>
            <Link to={`/${username}`}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              <MenuIcon className="h-6 w-6 text-gray-600 dark:text-white" />
            </Button>
          </div>
        </div>

      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 z-20 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 overflow-y-auto max-h-[calc(100vh-64px)]">
          <NavigationMenu className="w-full p-4">
            <NavigationMenuList className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuTrigger className="w-full text-left">{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/${href}`}
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-black dark:hover:text-white rounded"
                        onClick={() => setMenuOpen(false)}
                      >
                        Go to {label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-col flex-1 overflow-auto bg-zinc-50 dark:bg-zinc-950">
        <Outlet />
      </main>
      <DashboardFooter />
      {/* Floating Buttons and Command Palette */}
      <FloatingActionButton />
      <CommandPalette open={open} onOpenChange={setOpen} />
    </div>
  );
};


export default DashboardLayout;