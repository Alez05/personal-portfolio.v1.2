import { TCareerJourney } from '@components/about';

export const getCareerJourneyAction = async (): Promise<TCareerJourney[] | null>  => {
  try {
    const res = await fetch('http://localhost:3000/api/about/career-journey')
    if(!res.ok) throw new Error('Failed to load Career data')
    const data: TCareerJourney[] = await res.json()
    return data
  } catch (err) {
    console.error('Error fetching the Career Journey Data', err)
    return null
  }
}
