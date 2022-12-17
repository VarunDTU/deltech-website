import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const RegisterButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left py-6 z-5 mx-3">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md">
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-2 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:rotate-180 ease"></span>
              <span class="relative">Register Now</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                to="/ipRegistration"
                target="_blank"
                rel="noopener noreferrer"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  International Press
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://forms.gle/oZKzN6vKpyEtEgaC7"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Delegate Application
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default RegisterButton;
