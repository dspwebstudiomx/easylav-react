import { Paragraph, TitleH1 } from "components"
import BackgroundImage from "./BackgroundImage"
import image from '../../assets/images/images/Placeholder.webp'

const Test = () => {
  return (
    <>
      <BackgroundImage
        image_576={image}
        image_768={image}
        image_1024={image}
        image_1200={image}
      >
        <TitleH1>HELLO WORLD</TitleH1>
        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.</Paragraph>
      </BackgroundImage>
    </>
  )
}

export default Test