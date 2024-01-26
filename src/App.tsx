import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Welcome />
    </ThemeProvider>
  );
}

function Welcome() {
  return (
    <>
      <ModeToggle className="absolute right-4 top-4 md:right-8 md:top-8" />
      <div className="text-center">
        <header className="h-svh flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={logo}
              className="h-16 motion-safe:animate-[spin_20s_linear_infinite] pointer-events-none"
              alt="logo"
            />
            <h1 className="text-2xl font-semibold">Welcome to React</h1>
            <p className="text-sm text-muted-foreground">
              Edit{' '}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                src/App.tsx
              </code>{' '}
              and save to reload.
            </p>
          </div>
          <Button asChild>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Button>
        </header>
      </div>
    </>
  );
}

function ModeToggle(props: React.ComponentProps<typeof Button>) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" {...props}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default App;
