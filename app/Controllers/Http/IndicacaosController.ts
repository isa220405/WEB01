import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Indicacao from 'App/Models/Indicacao'

export default class IndicacaosController {
  public async create ({request}: HttpContextContract) {
    const data = await request.only(["titulo","texto"])
    const user = await Indicacao.create(data)
    return user
  }
  public async show ({params,response}: HttpContextContract) {
    try {
      const IndicacaoDB = await Indicacao.findOrFail(params.id)
      return IndicacaoDB
    } catch (error) {   
      response.status(400).send("Texto não encontrado!!!")
    }
  }
  public async update ({params,request}: HttpContextContract) {
    const IndicacaoDB = await Indicacao.findOrFail(params.id)
    const { Titulo, texto } = request.only(["Titulo","texto"])
    IndicacaoDB.titulo = Titulo
    IndicacaoDB.texto = texto
    await IndicacaoDB.save()
    return IndicacaoDB
  }
}
