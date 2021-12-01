import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Periodo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public periodo: string

  @column()
  public tempo_perido: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
