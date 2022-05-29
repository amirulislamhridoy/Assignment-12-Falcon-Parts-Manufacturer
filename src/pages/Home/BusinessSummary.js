import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUsers, faFlag } from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl text-center font-bold text-success ">
        MILLIONS BUSINESS TRUST US
      </h2>
      <p className="uppercase text-xl text-center mb-12 mt-3">
        Try to understand users expectation
      </p>

      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-success"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          <p className="text-4xl mt-4">500+</p>
          <p className="text-2xl text-success">Complete Project</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon className="text-5xl text-success" icon={faUsers} />
          <p className="text-4xl mt-4">250+</p>
          <p className="text-2xl text-success">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-success"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <p className="text-4xl mt-4">430+</p>
          <p className="text-2xl text-success">Feedbacks</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            className="text-success text-6xl ml-2"
            icon={faFlag}
          />
          <p className="text-4xl mt-4">70</p>
          <p className="text-2xl text-success">Countries</p>
        </div>
      </div>

      <div class="alert shadow-lg shadow-gray-400 mt-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Have an any question about us ?</span>
        </div>
        <div class="flex-none">
          <button class="btn btn-sm btn-success text-white">Contract Us</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
