/* eslint-disable react/prop-types */
export function InfoContactoIllia ({ contactos }) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
      {contactos.map(({ id, icon, title, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={id} className={`flex flex-col lg:flex-row text-center lg:text-justify gap-2 items-center border-2 border-[#14532d] px-6 py-6 rounded-3xl text-[#14532d]`}>
          {icon}
          <p>{title}</p>
        </a>
      ))}
    </div>
  )
}