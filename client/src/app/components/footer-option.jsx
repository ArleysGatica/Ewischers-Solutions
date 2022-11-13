export const FooterOption = ({ options }) => {
  return (
    <ul>
      {options && options.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}
