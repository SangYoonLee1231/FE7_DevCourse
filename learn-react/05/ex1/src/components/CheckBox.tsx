type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;
function CheckBox(props: InputProps) {
  const { children = " I Agree", ...rest } = props;
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          id="check"
          type="checkbox"
          className="appearance-none w-5 h-5 rounded-[5px] bg-[#4f4f4f] border border-[#4f4f4f] checked:bg-[url('/check.svg')] checked:border-[#ed4848] checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center checked:after:leading-5"
          {...rest}
        />
        <label htmlFor="">{children}</label>
      </div>
    </>
  );
}

export default CheckBox;
