// "use client";

// import React, { forwardRef, useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// export interface FormInputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
//   showPasswordToggle?: boolean;
//   rightIcon?: React.ReactNode;
//   leftIcon?: React.ReactNode;
//   variant?: "underline" | "rounded";
// }

// const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
//   (
//     {
//       className = "",
//       type = "text",
//       label,
//       error,
//       showPasswordToggle = false,
//       rightIcon,
//       leftIcon,
//       variant = "underline",
//       ...props
//     },
//     ref
//   ) => {
//     const [showPassword, setShowPassword] = useState(false);

//     const inputType = showPasswordToggle
//       ? showPassword
//         ? "text"
//         : "password"
//       : type;

//     const baseClasses =
//       "w-full font-montserrat font-hero py-2 px-4 focus:outline-none";
//     const underlineClasses =
//       "border-b-2 border-gray-700 focus:border-[#BE5103] bg-transparent";
//     const roundedClasses = "border border-[#BE5103] rounded-full bg-white";

//     const inputClasses = [
//       baseClasses,
//       variant === "underline" ? underlineClasses : roundedClasses,
//       (showPasswordToggle || rightIcon) && "pr-10",
//       leftIcon && "pl-10",
//       error && "border-red-500",
//       className,
//     ]
//       .filter(Boolean)
//       .join(" ");

//     return (
//       <div className="w-full">
//         {label && (
//           <label
//             htmlFor={props.id}
//             className="block text-sm font-medium text-gray-700 mb-1 font-hero"
//           >
//             {label}
//           </label>
//         )}
//         <div className="relative">
//           {leftIcon && (
//             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
//               {leftIcon}
//             </div>
//           )}
//           <input
//             type={inputType}
//             className={inputClasses}
//             ref={ref}
//             {...props}
//           />
//           {showPasswordToggle ? (
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible size={20} />
//               ) : (
//                 <AiOutlineEye size={20} />
//               )}
//             </button>
//           ) : rightIcon ? (
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//               {rightIcon}
//             </div>
//           ) : null}
//         </div>
//         {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
//       </div>
//     );
//   }
// );

// FormInput.displayName = "FormInput";

// // ✅ Default export is required to avoid "does not support attributes" error
// export default FormInput;

"use client";

import React, { forwardRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: "underline" | "rounded";
  wrapperClassName?: string; // ✅ New prop
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      className = "",
      type = "text",
      label,
      error,
      showPasswordToggle = false,
      rightIcon,
      leftIcon,
      variant = "underline",
      wrapperClassName = "", // ✅ Default empty
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    const baseClasses =
      "w-full font-montserrat font-hero py-2 px-4 focus:outline-none";
    const underlineClasses =
      "border-b-2 border-gray-700 focus:border-[#BE5103] bg-transparent";
    const roundedClasses = "border border-[#BE5103] rounded-full bg-white";

    const inputClasses = [
      baseClasses,
      variant === "underline" ? underlineClasses : roundedClasses,
      (showPasswordToggle || rightIcon) && "pr-10",
      leftIcon && "pl-10",
      error && "border-red-500",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`relative ${wrapperClassName}`}>
        {" "}
        {/* ✅ Allow custom width */}
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1 font-hero"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          <input
            type={inputType}
            className={inputClasses}
            ref={ref}
            {...props}
          />
          {showPasswordToggle ? (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          ) : rightIcon ? (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          ) : null}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
