import { Badge } from '@radix-ui/themes';

export function LayoutContainer({ children }) {
  return (
    <>
      <div className="flex items-start w-11/12 max-w-[1400px] mx-auto pb-12 pt-6">
        {children}
      </div>
    </>
  );
}


export function LayoutMainColumn({ children }) {
  return (
    <>
      <div className="grow relative overflow-hidden border-2 border-black rounded-xl bg-black/30">
        {children}
      </div>
    </>
  );
}

export function LayoutHeading({ text, badge }) {
  return (
    <>
      <div className="border-b-2 border-b-black flex items-center py-3 px-5 bg-black/40">
        <h1 className="text-3xl font-bold mb-3 mr-3">{text}</h1>
        {badge === 'Atom' && (
          <Badge color="cyan">{badge}</Badge>
        )}

        {badge === 'Molecule' && (
          <Badge color="orange">{badge}</Badge>
        )}


        {badge === 'Organism' && (
          <Badge color="green">{badge}</Badge>
        )}
      </div>
    </>
  );
}