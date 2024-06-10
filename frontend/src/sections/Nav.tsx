import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import famfb from "../assets/logos/famfb_logo.png";
import ButtonLink from "../common/ButtonLink";
import { Link, useLocation,useNavigate } from "react-router-dom";
import './Nav.css'
function Nav() {
  const location = useLocation()
  const navigate = useNavigate()

  const textLinkClasses =
    "text-red-400 hover:text-gray-900 active:text-gray-400";
    const navLinks= [
      { href: "home", children: "home" },
    ];
  function navi() {
    if (location.pathname === '/loan') {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }

  return (
    <Disclosure as="nav" className='navbar'>
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
            <div className="flex">
              <ButtonLink
                href="/"
                children={<img src={famfb} alt="Famfb logo" width={190} />}
              
              />
              <div className="ml-4 hidden items-center  hover:text-red-400 space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {location.pathname !== '/' && location.pathname !== '/dashboard' ? (
                    <p onClick={navi}>Home</p>
                ): null}
              </div>
            </div>
            
            

              <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden">
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
  );
}

export default Nav;
