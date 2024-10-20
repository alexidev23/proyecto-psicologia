/* eslint-disable react/prop-types */
export function InfoContacto ({ contactos }) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-around">
      {contactos.map(({ id, icon, title, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={id} className={`flex gap-2 items-center border-2 border-[#3b0764] px-10 py-6 rounded-3xl text-[#3b0764]`}>
          {icon}
          <p>{title}</p>
        </a>
      ))}
    </div>
  )
}