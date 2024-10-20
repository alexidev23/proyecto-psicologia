/* eslint-disable react/prop-types */
export function InfoContactoIllia ({ contactos }) {
  return (
    <div className="flex justify-between">
      {contactos.map(({ id, icon, title, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={id} className={`flex gap-2 items-center border-2 border-[#14532d] px-6 py-6 rounded-3xl text-[#14532d]`}>
          {icon}
          <p>{title}</p>
        </a>
      ))}
    </div>
  )
}