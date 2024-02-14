import Image from 'next/image'
import { basePath } from "../../next.config.mjs"

export default function Gallery() {
  const images = ['1_0.jpg', '1_1.jpg', '1_2.jpg', '1_3.jpg', '1_4.jpg', '1_5.jpg', '1_6.jpg', '1_7.jpg', '1_8.jpg', '1_9.jpg', '1_10.jpg', '1_11.jpg', '1_12.jpg', '1_13.jpg'] 
  const BASE_PATH = basePath ? basePath : ""
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={`${BASE_PATH}/images/${image}`} alt={`Image ${index}`} width={500} height={300} />
          <a href={`${BASE_PATH}/images/${image}`} download={`Image${index}.jpg`}>Download</a>
        </div>
      ))}
    </div>
  )
}