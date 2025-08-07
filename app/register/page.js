import Link from "next/link";

export default function Register() {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">

            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-10">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-red-900 dark:text-red-800">Register</h2>
                    <h5 className="mb-4 text-1xl tracking-tight font-Roboto text-red-800 dark:text-red-800">Create a new account</h5>
                </div>
            </section>

            <form className="max-w-sm mx-auto">
                <div className="flex space-x-4 mb-5">
                    <div className="w-1/2">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-red-900 dark:text-white">Full name</label>
                        <input type="text" id="first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-800 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="full name" required />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-red-900 dark:text-white">Last name</label>
                        <input type="text" id="last-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-800 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="last name" required />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-800 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="@gmail.com" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-red-900 dark:text-white">Phone Number</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-800 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                </div>

                <div className="flex items-start mb-5">
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-red-900 dark:text-gray-300">Already have account? Login</label>
                </div>
            </form>

            <div className="flex flex-col items-center space-y-4 mt-16">
                <div className="flex space-x-5 mt-10">
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">Facebook</button>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">Google</button>
                </div>
            </div>

            <div className="text-center mt-10">
                <Link href="/profile" className="text-red-800 hover:underline text-semibold">
                    Pindah Ke Halaman Profile
                </Link>
            </div>

        </div>
    );
}
