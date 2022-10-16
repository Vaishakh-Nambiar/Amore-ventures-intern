import React from "react";

function InputField({ name }) {
  if (name == "phone") {
    // console.log(phone)
    return (
      <div className="capitalize">
        <div className="my-2">{name}</div>
        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </div>
    );
  } else if (name == "email") {
    return (
      <div className="capitalize">
        <div className="my-2">{name}</div>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="@email"
          required
        />
      </div>
    );
    //   } else
  } else if (name == "dropdown") {
    return (
      <div className="capitalize">
        {/* {name} */}
        <div className="my-2">Product type</div>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a product</option>
          <option value="">Organic</option>
          <option value="">Gourmet</option>
          <option value="">Dairy</option>
          <option value="">Fresh</option>
          <option value="">Toiletries</option>
        </select>
      </div>
    );
  } else
    return (
      // <div>Hi</div>
      <div>
        <div className="capitalize">
          <div className="my-2">{name}</div>

          <input
            type="text"
            id={{ name }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required=""
          />
        </div>
      </div>
    );
}

export default InputField;
