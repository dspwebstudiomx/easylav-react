import { LogoHorizontalBlanco } from "assets"

const Loading = () => {
  return (
    <div className="min-h-screen bg-primary grid place-content-center">
      <img src={LogoHorizontalBlanco} alt="imagen" width={320} />
      <span className="loader mx-auto mt-8"></span>
    </div>
  )
}

export default Loading