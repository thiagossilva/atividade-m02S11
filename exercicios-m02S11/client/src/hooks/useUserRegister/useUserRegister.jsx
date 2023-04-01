import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { apiService } from '../../services/api'

const useUserRegister = () => {
  const navigate = useNavigate()

  const [data, setData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const registerUser = async (user) => {
    setIsSubmitting(true)

    const response = await apiService.post('/users', user)

    setError(response.error)
    setData(response.data)
    setIsSubmitting(false)

    if (response.error) {
      alert(response.error)
    } else {
      navigate('/login')
    }
  }

  return {
    user: data,
    isSubmitting,
    error,
    registerUser
  }
}

export default useUserRegister
