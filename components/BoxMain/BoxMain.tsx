interface BoxMainProps{
  children:React.ReactNode;
}

export function BoxMain({ children }: BoxMainProps) {
  return (
    <div className="
    border border-slate-400 rounded-md
    ">
      {children}
    </div>
  )
};
