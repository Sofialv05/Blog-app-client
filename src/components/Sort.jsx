import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Sort({ setSort }) {
  return (
    <Menu as="div" className="relative inline-block text-left w-60">
      <div>
        <MenuButton className="inline-flex w-40 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-sub2 focus:ring-offset-0 focus:border-sub2">
          Sort by
          <ChevronDownIcon
            aria-hidden="true"
            className="ml-5 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="w-40 absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1 overflow-y-auto max-h-60">
          <MenuItem>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={() => setSort("title")}
            >
              A - Z
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={() => setSort("-title")}
            >
              Z - A
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={() => setSort("createdAt")}
            >
              Newest
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="*:block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={() => setSort("-createdAt")}
            >
              Oldest
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

Sort.propTypes = {
  setSort: PropTypes.string,
};
