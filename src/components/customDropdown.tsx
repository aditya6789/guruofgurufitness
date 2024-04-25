"use Client";
// import { AboutUsSubLInk } from "@/components/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  // NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
// import clsx from "clsx";
// import Link from "next/link";
interface sublinks{
    name : string;
    href:string;
}
interface ICustomDropdown{
name:string;
sublinks:sublinks[];

}

function CustomDropdown({name,sublinks}: ICustomDropdown) {
  return (
    <div>
        
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-violet-400">
            {name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {sublinks.map((link) => (
              <NavigationMenuLink className="w-[700px]">
                <Link to={link.href} className="">
                  <p className="text-[16px] py-5 px-3">{link.name}</p>
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}

export default CustomDropdown;
