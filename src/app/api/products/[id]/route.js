import { conn } from '../../../../libs/mysql'
import { NextResponse } from 'next/server'
import { processImage } from '../../../../libs/processImage'
import cloudinary from '../../../../libs/cloudinary'

export async function GET(request, { params }) {
  try {
    const result = await conn.query('SELECT * FROM product WHERE id = ?', [
      params.id,
    ])

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: 'Podructo no encontrado',
        },
        {
          status: 500,
        }
      )
    }

    return NextResponse.json(result[0])
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

export async function DELETE(request, { params }) {
  try {
    const result = await conn.query('DELETE FROM product WHERE id = ?', [
      params.id,
    ])

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: 'Producto no encontrado',
        },
        {
          status: 404,
        }
      )
    }

    return NextResponse.json('Se elimino el producto')
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

export async function PUT(request, { params }) {
  try {
    const data = await request.formData()
    const image = data.get('image')

    const updatedServices = {
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
    }

    if (image) {
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

      updatedServices.image = res.secure_url

      const result = await conn.query('UPDATE product SET ? WHERE id = ?', [
        updatedServices,
        params.id,
      ])

      if (result.affectedRows === 0) {
        return NextResponse.json(
          {
            message: 'Porducto no encontrado',
          },
          {
            status: 404,
          }
        )
      }

      const updatedProduct = await conn.query(
        'SELECT * FROM product WHERE id = ?',
        [params.id]
      )

      return NextResponse.json(updatedProduct[0])
    }
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
