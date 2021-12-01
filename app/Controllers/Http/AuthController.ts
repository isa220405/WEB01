import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
    public async register({ request }: HttpContextContract) {
        // const data = request.only(["email", "password"])
        const data = await request.only(["email","password"])
        const user = await User.create(data)
        return user
    }
    
      public async login({ request, auth, response }: HttpContextContract) {
        try {
          const { email, password } = request.all()
          const token = await auth.use('api').attempt(email, password)
          const user = await User.findByOrFail("email", email)
          return { token, user }
        } catch (error) {
          response.status(401).send("Login ou senha incorretos!!!")
        }
      }
}
