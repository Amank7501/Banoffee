export default function SectionDivider({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className={`h-px w-16 ${light ? 'bg-[#FFF8F0]/20' : 'bg-[#C9924A]/30'}`} />
      <span className={`text-xs ${light ? 'text-[#FFF8F0]/30' : 'text-[#C9924A]/50'}`}>✦</span>
      <div className={`h-px w-16 ${light ? 'bg-[#FFF8F0]/20' : 'bg-[#C9924A]/30'}`} />
    </div>
  )
}
