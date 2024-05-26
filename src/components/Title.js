export default function Title(props) {
  return (
    <div className="fixed top-[calc(100%-38vw)] md:top-[calc(100%-25vw)] left-60 text-10xl text-titleColor opacity-50 z-[-1] font-sans">
      <span>{props.title}</span>
    </div>
  );
}
