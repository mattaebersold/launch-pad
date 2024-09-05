
export function LayoutContainer({ children }) {
  return (
    <>
      <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
        {children}
      </div>
    </>
  );
}


export function LayoutMainColumn({ children }) {
  return (
    <>
      <div className="grow relative overflow-hidden">
        {children}
      </div>
    </>
  );
}

export function LayoutHeading({ text }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{text}</h1>
    </>
  );
}