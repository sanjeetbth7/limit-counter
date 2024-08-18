import React from 'react';
import { DarkThemeToggle } from 'flowbite-react';

export default function Header() {
  return (
    <div className="relative w-full p-4">
      <div className="absolute top-4 right-4">
        <DarkThemeToggle className="px-4 py-2" />
      </div>
    </div>
  );
}
