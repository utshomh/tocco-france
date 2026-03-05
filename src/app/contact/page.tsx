import { Metadata } from "next";
import { LuMessagesSquare, LuPlane } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-2 px-16 pt-40 pb-6">
      <div className="pr-12 border-r border-gray-400 space-y-4">
        <div className="w-full flex items-center gap-6">
          <h2 className="text-2xl font-semibold">SEND US AN EMAIL</h2>
          <div className="flex-1 h-[1.5px] w-full bg-gray-400" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label>Your Name</label>
            <input
              type="text"
              className="w-full p-2 border-2 border-gray-500 outline-0 rounded"
            />
          </div>
          <div className="space-y-1.5">
            <label>Your Email</label>
            <input
              type="email"
              className="w-full p-2 border-2 border-gray-500 outline-0 rounded"
            />
          </div>
          <div className="space-y-1.5">
            <label>Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border-2 border-gray-500 outline-0 rounded"
            />
          </div>
          <div className="space-y-1.5">
            <label>Company</label>
            <input
              type="text"
              className="w-full p-2 border-2 border-gray-500 outline-0 rounded"
            />
          </div>
          <div className="space-y-1.5 col-span-2">
            <label>Your Message</label>
            <textarea className="h-48 w-full border-2 border-gray-500 outline-0 rounded"></textarea>
          </div>
        </div>
        <button className="py-2.5 px-4 bg-text text-background rounded-xs uppercase cursor-pointer hover:text-black/85 transition-colors">
          Ask a Question
        </button>
      </div>

      <div className="pl-12 space-y-10">
        <div className="w-full flex items-center gap-6">
          <h2 className="uppercase text-2xl font-semibold">Contact Us</h2>
          <div className="flex-1 h-[1.5px] w-full bg-gray-500" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <MdPhoneAndroid className="text-4xl" />
            <div className="text-sm font-semibold">
              <p>+880 1903-000 038</p>
              <p>info@toccofrance.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <SlLocationPin className="h-16 w-16" />
            <div className="space-y-0.5">
              <h3 className="text-lg font-semibold">Corporate Office</h3>
              <p className="text-sm">
                House:3/5, Sultana Villa, Road: 16, Nikunja-2, Khilkhet-1229
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LuPlane className="text-4xl" />
            <div className="text-sm font-semibold">
              <p>Free standard shipping</p>
              <p>on all orders</p>
            </div>
          </div>
          <div className="flex gap-2">
            <SlLocationPin className="h-16 w-16" />
            <div className="space-y-0.5">
              <h3 className="text-lg font-semibold">Gulshan Showroom</h3>
              <p className="text-sm">
                Shop No:11, Bidisha Super Market, Gulshan Circle 2, Dhaka - 1212
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LuMessagesSquare className="text-4xl" />
            <div className="text-sm font-semibold">
              <p>Support</p>
              <p>24/7 </p>
            </div>
          </div>
          <div className="flex gap-2">
            <SlLocationPin className="h-16 w-16" />
            <div className="space-y-0.5">
              <h3 className="text-lg font-semibold">Kawran Bazaar Office</h3>
              <p className="text-sm">
                Kawran Bazar Electric Market, Dhaka - 1215
              </p>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-500 my-12" />

        <p className="font-semibold mt-auto">
          Do you have questions about how we can help your company?
          <br />
          <span className="text-lime-600">
            Send us an email and we’ll get in touch shortly.
          </span>
        </p>
      </div>
    </div>
  );
}
