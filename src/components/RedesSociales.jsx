/* eslint-disable react/prop-types */
export function RedesSociales ({ redes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {redes.map(({ id, img, name, url, color }) => (
        <a href={url} key={id} target="_blank" rel="noopener noreferrer" className={`flex gap-2 items-center justify-center py-4 border border-${color} rounded-3xl`}>
          <img src={`/${img}`} alt={url} height={35} width={35} />
          <span className="font-medium text-xl">{name}</span>
        </a>
      ))}
    </div>
  )
}