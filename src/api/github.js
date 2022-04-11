import axios from "axios"

export const Api = axios.create({
  baseURL: "https://api.github.com/users"
})

export const search = async(url, setData) => {
  const response =  await Api.get(url).catch((err) => console.log(err))

  let newString =  response.data.created_at.slice(0,10)
  response.data.created_at = newString

  setData(response.data)
}


export default Api