import clsx from "clsx"

const Button = ({
   variant = "default"
}) => {
   const variants = {
      default: "bg-gray-100 text-gray-800",
      primary: "bg-blue-500 text-white",
      danger: "bg-red-500 text-white"
   }
   
   const className = clsx(
      "px-4 py-2 rounded-md",
      variants[variant]
   )

   return (
      <div className={className}>Button</div>
   )
}
export default Button
