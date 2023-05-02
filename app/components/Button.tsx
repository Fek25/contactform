export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
      <button
        type="submit"
        className="px-5 py-3 text-sm font-medium text-black border border-black rounded-full w-full"
      >
        {children}
      </button>
    );
  };