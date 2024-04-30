import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

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
    const {
      newName,
      description,
      address,
      service,
      category,
      phoneNumber,
      whatsapp_link,
      facebook_link,
      instagram_link,
      experienceYears,
      availableDays,
      availableHours,
    } = await request.json()

    const result = await conn.query('INSERT INTO product SET ?', {
      newName,
      description,
      address,
      service,
      category,
      phoneNumber,
      whatsapp_link,
      facebook_link,
      instagram_link,
      experienceYears,
      availableDays,
      availableHours,
    })

    return NextResponse.json({
      newName,
      description,
      address,
      service,
      category,
      phoneNumber,
      whatsapp_link,
      facebook_link,
      instagram_link,
      experienceYears,
      availableDays,
      availableHours,
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
