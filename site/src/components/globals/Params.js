
export function ParamContainer({ children }) {
  return (
    <>
      <ul>
        {children}
      </ul>
    </>
  );
}


export function Param({ label, description }) {
  return (
    <>
      <li className="flex items-center my-5 pl-0 ml-0">
				<pre className="mr-3 bg-[#000000] p-1 px-3 rounded-[5px]">{label}</pre>
				<span>{description}</span>
      </li>
    </>
  );
}