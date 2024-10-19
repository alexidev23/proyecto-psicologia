/* eslint-disable react/prop-types */
export function InfoContacto ({ InfoContacto }) {
  return (
    <div className="flex justify-around">
      {InfoContacto.map(({ id, icon, title }) => (
        <div key={id} className="flex gap-2 items-center">
          {icon}
          <p>{title}</p>
        </div>
      ))}
    </div>
  )
}