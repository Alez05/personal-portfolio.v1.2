'use server'

import { TCVData } from "./cv.type"

export const getCvAction = async ():Promise<TCVData | any > => {
  try {
    const res = await fetch('http://localhost:3000/api/cv')

    if(!res.ok) throw new Error('Failed to load the CV data')

    const data:TCVData = await res.json()
    return data
  }catch(err) {
    console.error('Error fetching the CV', err)
    return null
  }
}
