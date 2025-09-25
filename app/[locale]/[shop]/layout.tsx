import type { ReactNode } from 'react'
import ShopNav from '@/components/Navbar/ShopNav'

export default function ShopLayout({ children }: { children : ReactNode }) {


  return (
    <div className="shop-layout flex flex-col min-h-screen">
      <header>
        <ShopNav/>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}
