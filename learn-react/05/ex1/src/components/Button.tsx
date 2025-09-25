type InputProps = React.ComponentPropsWithoutRef<"button">;

function Button(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <button
        className="inter w-60 h-11 rounded-lg placeholder:text-[#acacac] bg-white border border-[#4f4f4f]"
        {...rest}
      >
        Btn
      </button>
    </>
  );
}

export default Button;
