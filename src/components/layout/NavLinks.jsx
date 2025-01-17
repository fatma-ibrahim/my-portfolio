import { CgMenu } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavLinks() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="lg:px-6 lg:mx-6 text-lg font-bold">Fatma Ibrahim</h1>

          {/* Dropdown Menu for Mobile */}
          <div className="flex lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button type="button" variant="icon">
                  <CgMenu size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <a href="#cover" className="w-full">
                      Home
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#about" className="w-full">
                      About
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#education" className="w-full">
                      Education
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#skills" className="w-full">
                      Skills
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#experience" className="w-full">
                      Experience
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#services" className="w-full">
                      Services
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#projects" className="w-full">
                      Projects
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#contact" className="w-full">
                      Contact
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Regular Links for Desktop */}
          <nav className="hidden px-6 mx-6 lg:flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <a
              href="#cover"
              className="text-blue-600 hover:text-blue-800"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-blue-600 hover:text-blue-800"
            >
              About
            </a>
            <a
              href="#education"
              className="text-blue-600 hover:text-blue-800"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-blue-600 hover:text-blue-800"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-blue-600 hover:text-blue-800"
            >
              Experience
            </a>
            <a
              href="#services"
              className="text-blue-600 hover:text-blue-800"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-blue-600 hover:text-blue-800"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800"
            >
              Contact
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
}