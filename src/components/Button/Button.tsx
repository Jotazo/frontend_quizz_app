interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-custPurple hover:bg-custLightPurple transition text-white p-4 sm:p-8 rounded-3xl w-full text-[RubikMediumtext] text-lg sm:text-3xl items-shadow">{text}</button>
  )
}

export default Button