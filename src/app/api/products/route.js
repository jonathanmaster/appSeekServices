import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'

cloudinary.config({
  cloud_name: 'dzvpk63tu',
  api_key: '679478739618299',
  api_secret: 'YNiyR031ZeMT50k71qgauK-AZxI',
})

export async function GET() {
  try {
    const results = await conn.query('SELECT * FROM product')

    return NextResponse.json(results)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(request) {
  try {
    const data = await request.formData()
    const image = data.get('image')

    if (!image) {
      return NextResponse.json(
        {
          message: 'imagen requerida',
        },
        {
          status: 500,
        }
      )
    }

    //para convertir la imagen
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    //para guardar en la carpeta public
    const filePath = path.join(process.cwd(), 'public', image.name)
    await writeFile(filePath, buffer)

    const res = await cloudinary.uploader.upload(filePath) // para subirlo y nos devuelve la respuesta

    const result = await conn.query('INSERT INTO product SET ?', {
      newName: data.get('newName'),
      description: data.get('description'),
      image: res.secure_url,
      address: data.get('address'),
      service: data.get('service'),
      category: data.get('category'),
      phoneNumber: data.get('phoneNumber'),
      whatsapp_link: data.get('whatsapp_link'),
      facebook_link: data.get('facebook_link'),
      instagram_link: data.get('instagram_link'),
      experienceYears: data.get('experienceYears'),
      availableDays: data.get('availableDays'),
      availableHours: data.get('availableHours'),
    })

    return NextResponse.json({
      newName: data.get('newName'),
      description: data.get('description'),
      address: data.get('address'),
      service: data.get('service'),
      category: data.get('category'),
      phoneNumber: data.get('phoneNumber'),
      whatsapp_link: data.get('whatsapp_link'),
      facebook_link: data.get('facebook_link'),
      instagram_link: data.get('instagram_link'),
      experienceYears: data.get('experienceYears'),
      availableDays: data.get('availableDays'),
      availableHours: data.get('availableHours'),
      id: result.insertId,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    )
  }
}
