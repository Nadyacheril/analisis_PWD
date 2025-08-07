import Link from "next/link"
export default function profile() {
    return (
        <div>
        <body class="bg-red-100  text-gray-800 p-6 font-sans"/>
   
    <div class="flex items-center justify-between mb-6">
        <a href="home.html">
            <ion-icon name="arrow-back" class="text-3xl text-red-800"></ion-icon>
        </a>
        <h1 class="text-4xl font-bold text-red-800">Profile</h1>
        <a href="landing.html">
            <ion-icon name="log-out-outline" class="text-3xl text-red-800"></ion-icon>
        </a>
    </div>

   
    <div class="flex-grow flex items-start justify-center px-6 pt-20">
        <div class="w-full max-w-4xl p-8">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-16">
               
                <div class="flex flex-col items-center">
                    <div class="w-40 h-40 rounded-full overflow-hidden">
                         <img src="/img/jay_.jpeg" />
                    </div>
                    <div class="flex gap-4 mt-4">
                        <button id="editBtn" class="bg-red-800 text-white text-sm px-4 py-2 rounded hover:bg-pink-700">
                            Edit Profile
                        </button>

                        <button id="saveBtn"
                            class="bg-red-700 text-white text-sm px-4 py-2 rounded hover:bg-pink-700 hidden">
                            Save profile
                        </button>
                    </div>
                </div>

                
                <div class="flex-1 space-y-8 w-full max-w-md">
                    <div>
                        <h2 class="text-xl font-bold text-red-800">Name</h2>
                        <input id="nama" class="w-full border-b border-gray-300 focus:outline-none text-red-900" type="text" disabled
                            value="Ceeyra_30" />
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-red-800">Password</h2>
                        <input id="password" class="w-full border-b border-gray-300 focus:outline-none text-red-900" type="password"
                            disabled value="300421" />
                    </div>


                    <div>
                        <h2 class="text-xl font-bold text-red-800">Address</h2>
                        <input id="alamat" class="w-full border-b border-gray-300 focus:outline-none text-red-900" type="text"
                            disabled value="Kota Denpasar, Bali" />
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-red-800">Phone Number</h2>
                        <input id="telepon" class="w-full border-b border-gray-300 focus:outline-none text-red-900" type="text"
                            disabled value="+62-857-5612-3047" />
                    </div>
                </div>
            </div>
        </div>
            </div>
  
        </div>
        
    )
}
