export const Input = ({
    id,
    name,
    label,
    type,
    placeholder,
    ...props
  }: {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }) => {
    return (
      <fieldset>
        <label
          className="block mb-2 text-sm font-medium text-gray-500"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="border text-sn rounded-lg block w-full p-2.5 bg-black/80 border-x-gray-600 placeholder-gray-400 text-white"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...props}
        />
      </fieldset>
    );
  };