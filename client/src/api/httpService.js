import { toast } from "react-toastify"

export const apiRequest = (url, body = undefined) => {
    return fetch(`http://localhost:4000/${url}`, {
        headers: { 'Content-Type': 'application/json' },
        ...(body && {
            method: "POST",

            body: JSON.stringify(body)
        })
    }).then(async response => {
        const jsonResponse = await response.json()
        const statusCode = response.status
        if (statusCode < 400) {
            return jsonResponse
        }
        else if (statusCode >= 400 && statusCode < 500) {
            if (response.status === 401) {
                console.log("logout")
                return
            }
            else {
                toast.error(jsonResponse?.message)
                return null
            }
        }
        else {
            toast.error("Opps something went wrong!")
        }
    })
}