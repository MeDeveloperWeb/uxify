export default function HighlightedText({
  children,
  onHover = false,
  className,
  bgSizeClass = "bg-[length:100%_110%]",
  ...props
}) {
  return (
    <span className="relative inline-block cursor-pointer group">
      <span className={`relative z-0 ${className}`} {...props}>
        {children}
      </span>
      <span
        className={`absolute inset-0 z-10 transition-transform duration-300 ease-in-out transform ${
          onHover
            ? "scale-x-100 lg:scale-x-0 lg:group-hover:scale-x-100"
            : "scale-x-100"
        } origin-left`}
      >
        <span className="absolute inset-0 opacity-50"></span>
        <span
          className={`absolute inset-0 bg-[url('/hhc.svg')] bg-no-repeat animate-draw-highlight ${bgSizeClass}`}
        ></span>
      </span>
    </span>
  );
}
