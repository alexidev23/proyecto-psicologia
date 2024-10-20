/* eslint-disable react/prop-types */
export function InfoContacto ({ contactos }) {
  return (
    <div className="flex justify-between">
      {contactos.map(({ id, icon, title, url, color }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={id} className={`flex gap-2 items-center border-2 border-[${color}] px-10 py-6 rounded-3xl text-[${color}]`}>
          {icon}
          <p>{title}</p>
        </a>
      ))}
    </div>
  )
}