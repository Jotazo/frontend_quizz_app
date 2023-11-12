interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-custPurple hover:bg-custLightPurple transition text-white p-8 rounded-3xl w-full heading-s items-shadow">{text}</button>
  )
}

export default Button