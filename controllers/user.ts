import { Pool } from 'pg'

interface User {
  id: number
  firstName: string
  lastName: string
  address: string
  birthDate: string
  zipCode: string
  city: string
}

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})

export const getUsers = async (): Promise<User[]> => {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM users')
    return result.rows.map(row => ({
        id: row.id,
        firstName: row.first_name,
        lastName: row.last_name,
        address: row.address,
        birthDate: row.birth_date,
        zipCode: row.zip_code,
        city: row.city,
      }))
  } finally {
    client.release()
  }
}