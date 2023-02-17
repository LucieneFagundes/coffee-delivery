import axios from 'axios'

export async function getCoffee() {
  const { data } = await axios.get(`http://localhost:3004/coffee`)
  return data
}
