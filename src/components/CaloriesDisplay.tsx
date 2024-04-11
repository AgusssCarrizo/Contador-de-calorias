type CaloriesDisplayProps = {
    calories: number ,
    text: string
}
export default function CaloriesDisplay({calories, text} : CaloriesDisplayProps) {
  return (
    <div>
       <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center text-slate-400">
    <span className="font-black text-6xl text-white">{calories}</span>
   {text}
   </p>
    </div>
  )
}
