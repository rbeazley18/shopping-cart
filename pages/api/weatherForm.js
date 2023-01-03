import loadWeather from "../../lib/openweather";

export default async function getWeatherHandler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    // console.log('body: ', body)
  
    if (!body.city) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'City not found' })
    }
  
    // Found the city.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.city}` })

    // Send to openweather
    
  }

