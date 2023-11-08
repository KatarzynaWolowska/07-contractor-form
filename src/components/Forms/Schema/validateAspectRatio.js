const validateAspectRatio = file => {
    if (!file) return true

    const img = new Image()
    img.src = URL.createObjectURL(file)

    return new Promise(resolve => {
        img.onload = () => {
            const { width, height } = img
            resolve(width === height)
        }
    })
}

export default validateAspectRatio
