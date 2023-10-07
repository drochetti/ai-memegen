import { FunctionComponent, SVGProps } from "react"

const UploadIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 32 32">
      <title>upload</title>
      <path d="M14 18h4v-8h6l-8-8-8 8h6zM20 13.5v3.085l9.158 3.415-13.158 4.907-13.158-4.907 9.158-3.415v-3.085l-12 4.5v8l16 6 16-6v-8z"></path>
    </svg>
  )
}

export default UploadIcon