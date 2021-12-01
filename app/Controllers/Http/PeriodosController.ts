import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Periodo from 'App/Models/Periodo'

export default class PeriodosController {
  public async create ({request}: HttpContextContract) {
    const data = await request.only(["periodo","tempo_perido"])
    const user = await Periodo.create(data)
    return user
  }

  public async show ({params,response}: HttpContextContract) {
    try {
      const IndicacaoDB = await Periodo.findOrFail(params.id)
      return IndicacaoDB
    } catch (error) {   
      response.status(400).send("Texto não encontrado!!!")
    }
  }
}
