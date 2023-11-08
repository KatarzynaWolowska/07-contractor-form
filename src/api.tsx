const API_URL = 'https://6546492dfe036a2fa955757c.mockapi.io'

const API = async (method: string, endpoint: string, data = null) => {
    const url = `${API_URL}/${endpoint}`
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    }

    try {
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        if (method === 'DELETE') {
            return null
        }

        console.log(response)

        const responseData: Response = await response.json()

        console.log(responseData)

        return responseData
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export default API
