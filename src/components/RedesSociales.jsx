/* eslint-disable react/prop-types */
export function RedesSociales ({ redes }) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
      {redes.map(({ id, img, name, url, color }) => (
        <a href={url} key={id} target="_blank" rel="noopener noreferrer" className={`flex flex-col lg:flex-row gap-2 items-center justify-center py-4 border border-[${color}] rounded-3xl lg:px-10`}>
          <img src={`/${img}`} alt={url} height={35} width={35} />
          <span className="font-medium text-lg lg:text-xl">{name}</span>
        </a>
      ))}
    </div>
  )
}