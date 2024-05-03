// import { writeFile } from 'fs/promises'
// import path from 'path'

export async function processImage(image) {
  //para convertir la imagen
  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)

  //para guardar en la carpeta public
  // const filePath = path.join(process.cwd(), 'public', image.name)
  // await writeFile(filePath, buffer)

  return buffer
}
