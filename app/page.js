import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
      
    <div>
        <nav class="bg-red-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200">
          <div class="max-w-screen-xl mx-auto px-4 py-4">
            <div class="flex flex-wrap items-center justify-between">
              <a href="#" className="text-3xl font-semibold text-white">XURAA</a>
              <ul className="hidden md:flex space-x-8 text-white font-medium">
                <li><a href="#About" className="hover:text-red-500">About</a></li>
                <li><a href="#Discount" className="hover:text-red-500">Discount</a></li>
                <li><a href="#Product" className="hover:text-red-300">Product</a></li>
                <li><a href="#Contact" class="hover:text-red-300">Contact</a></li>
              </ul>
              <div class="flex items-center space-x-4">
               
                <a href="card.html" id="icon-keranjang">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10 text-white hover:text-red-300 transition duration-150">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M6.75 14.25h10.5l1.5-6H6.75L5.106 5.272M6.75 14.25L5.625 18m0 0a1.125 1.125 0 102.25 0m-2.25 0h11.25a1.125 1.125 0 102.25 0m-2.25 0L17.25 14.25" />
                  </svg>
                </a>
               
                <a href="profil.html">
                  
                    <img src="/img/jay_.jpeg" alt="Profile"
                    class="w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer" />
                </a>
              </div>
            </div>
           
            <form class="mt-6">
              <div class="relative max-w-md mx-auto">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                  placeholder="Search..." required />
                <button type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-red-800 hover:bg-red-500 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">
                  Search
                </button>
              </div>
            </form>
          </div>
        </nav>
        
    <div class="h-48"></div>

    
    <main id="About" class="pt-20 text-center">
        <h1 class="text-4xl font-bold text-red-900">Welcome to the XURAA website, please take a look at our products.
        </h1>
        <p class="text-red-800 text-lg mt-6">XURAA is a store that sells clothing ranging from men's, women's,
            children's and also sportswear.</p>
        <p class="text-red-800 text-lg mt-2">XURAA store has a website for buyers/customers to see the products
            available at XURAA store.</p>
        <p class="mt-8 text-red-900 text-xl font-semibold max-w-3xl mx-auto">Why should you shop at XURAA store? Because
            this store has the latest products every week and will get discounts and giveaways on each of its products!!
        </p>
    </main>

    
    <section id="Discount" class="border-t border-red-800 mt-12 pt-4 text-center">
        <p class="text-red-800 font-bold text-2xl">Come get discounts on the newest products at the XURAA store!!</p>
    </section>

    
    <section id="Product" class="mt-20 px-4">
        <div id="data-product" class="flex flex-wrap justify-center gap-6"></div>
    </section>

    
    <div id="toast" class="fixed bottom-4 right-4 hidden bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
    </div>

            
                     <footer id="Contact" class="bg-red-900 mt-10">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="https://www.figma.com/design/FemZTNGcQilBTjAq3zeOpm/xuraa?node-id=0-1&t=JOJUZlJv5gyKiLIe-1"
                        class="flex items-center">
                        <span class="self-center text-3xl font-bold text-white">XURAA</span>
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">Shop Branch</h2>
                        <ul class="text-white font-medium">
                            <li><a href="#" class="hover:underline">Street Braga Bandung</a></li>
                            <li><a href="#" class="hover:underline">Street Legian Bali</a></li>
                            <li><a href="#" class="hover:underline">Street Legian Depok</a></li>
                            <li><a href="#" class="hover:underline">Street Legian Jakarta</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm text-center font-semibold text-white uppercase">Follow Us</h2>
                        <ul class="text-white text-center font-medium">
                            <li><a href="https://github.com/" class="hover:underline">Github: xuraadesain</a></li>
                            <li><a href="https://www.instagram.com/cherilldy_?igsh=bXI2OTBnb3k4NzRj"
                                    class="hover:underline">Ig: @xuraa.xcy</a></li>
                            <li><a href="https://www.instagram.com/cherilldy_?igsh=bXI2OTBnb3k4NzRj"
                                    class="hover:underline">TikTok: @xuraa.xcy_</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-center text-white uppercase">Need Help?</h2>
                        <ul class="text-white text-center font-medium">
                            <li><a href="#" class="hover:underline">+0857-3004-3001</a></li>
                            <li><a href="#" class="hover:underline">xuraa30@gmail.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-center text-white uppercase">Payment</h2>
                        <ul class="text-white text-center font-medium">
                            <li><a href="#" class="hover:underline">BRI</a></li>
                            <li><a href="#" class="hover:underline">OVO</a></li>
                            <li><a href="#" class="hover:underline">VISA</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-white sm:text-center">© 2025 <a href="https://flowbite.com/"
                        class="hover:underline">XURAA.By.cherilnadya</a>. All Rights Reserved.</span>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 8 19">
                            <path fill-rule="evenodd"
                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 17">
                            <path fill-rule="evenodd"
                                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Twitter page</span>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">GitHub account</span>
                    </a>
                        </div>
                        
            </div>
                </div>
               
            </footer>
              <div className="text-center mt-10">
                <Link href="/login" className="text-red-800 hover:underline">
                    Klik Login
                    </Link>
                </div>
</div>
  );
}
