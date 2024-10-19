/* eslint-disable react/prop-types */
export function RedesSociales ({ redes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {redes.map(({ id, img, name, url }) => (
        <a key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <img src={`/${img}`} alt={url} height={40} width={40} />
            <span>{name}</span>
          </a>
        </a>
      ))}
    </div>
  )
}