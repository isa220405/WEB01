import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resumo from 'App/Models/Resumo'

export default class ResumosController {
  public async create ({request}: HttpContextContract) {
    const data = await request.only(["Titulo","resumo"])
    const user = await Resumo.create(data)
    return user
  }

  public async show ({params,response}: HttpContextContract) {
    try {
      const IndicacaoDB = await Resumo.findOrFail(params.id)
      return IndicacaoDB
    } catch (error) {   
      response.status(400).send("Texto não encontrado!!!")
    }
  }

  public async update ({params,request}: HttpContextContract) {
    const IndicacaoDB = await Resumo.findOrFail(params.id)
    const { Titulo, resumo } = request.only(["Titulo","resumo"])
    IndicacaoDB.Titulo = Titulo
    IndicacaoDB.resumo = resumo
    await IndicacaoDB.save()
    return IndicacaoDB
  }

}
