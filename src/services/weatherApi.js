import { api } from './api'

export const getWeather = async (storage) => {
  try {
    const { data, status } = await api.get(`&lat=${storage.latitude}&lon=${storage.longitude}&user_ip=remote`)
    return { data, status}
  } catch (error) {
    return error
  }
}