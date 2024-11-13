import Translatable from "./translatable_text/Translatable";

export default function EndOFLoader() {
  return (
    <div className="flex items-center justify-center">
      <p className="py-10 text-slate-500"><Translatable>No more product to display</Translatable></p>
    </div>
  )
}
