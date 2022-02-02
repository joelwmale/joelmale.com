import axios from "axios"

export default async function handler(req, res) {
  // send api request to mailerlite
  const { body } = req
  const { email, name } = body

  axios
    .post(
      "https://api.mailerlite.com/api/v2/subscribers",
      {
        email,
        name,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.API_KEY,
        },
      }
    )
    .then(response => {
      if (response.data.id) {
        res.send({status: true})
      } else {
        res.send({status: false})
      }
    })
    .catch(err => res.send({status: false, err: err.message}))
}
