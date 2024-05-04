import { conn } from '../../../libs/mysql'
import { NextResponse } from 'next/server'
import { processImage } from '../../../libs/processImage'
import cloudinary from '../../../libs/cloudinary'

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

    const buffer = await processImage(image)

    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'image',
          },
          async (err, result) => {
            if (err) {
              console.log(err)
              reject(err)
            }

            resolve(result)
          }
        )
        .end(buffer)
    })

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
