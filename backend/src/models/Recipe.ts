import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid', { name: 'Id' })
  public id?: string

  @Column({ name: 'Name', type: 'text' })
  public name: string

  @Column({ name: 'Description', type: 'text' })
  public description: string

  constructor(name: string, description: string, id?: string) {
    this.name = name
    this.description = description
    this.id = id
  }

  public update(name: string, description: string) {
    this.name = name
    this.description = description
  }
}
