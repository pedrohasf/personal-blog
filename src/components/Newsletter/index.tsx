import axios from "axios";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Newsletter: React.FC = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = useCallback(async (data: any) => {
    try {
      const { emailAddress } = data;
      await axios("/api/subscribe", {
        data: JSON.stringify({
          email: emailAddress,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      toast.success("🚀 Almost Finished…. Please confirm your email address.");
    } catch (error) {
      toast.error("❌ Something went wrong...");
    }
  }, []);
  return (
    <div className="bg-gray-800 rounded-lg">
      <div className="max-w-7xl mx-auto py-10 mt-12 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Weekly articles about all things related to web development and
            design.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-8">
          <form onSubmit={handleSubmit(onSubmit)} className="sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              ref={register}
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
