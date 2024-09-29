const Checkbox = () => {
  return (
    <label className="flex gap-2 items-center self-stretch my-auto">
      <input
        type="checkbox"
        className="w-4 h-4 bg-white rounded border border-gray-300 border-solid"
      />
      <span className="text-sm font-medium leading-none text-accent-foreground">
        Remember me
      </span>
    </label>
  );
};

export { Checkbox };
