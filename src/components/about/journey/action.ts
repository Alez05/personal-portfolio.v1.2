import { TJourney } from "./journey.type";


export const getJourneyAction = async ():Promise<TJourney | null> => {
  try {
    const res = await fetch('http://localhost:3000/api/journey')

    if(!res.ok) throw new Error('Failed to load the Journey data.')

    const data:TJourney = await res.json()
    return data
  } catch(err) {
    console.error('Error fetching the Journey.', err)
    return null
  }
}
