import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const user = [{ name: 'Gabriel', email: 'gabriiel66@gmail.com' }]

export default {
  async index(req: Request, res: Response) {
    return res.json(user)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    const emailReturn = emailService.sendMail(
      {
        email: 'gabriiel662gmail.com',
        name: 'Gabriel',
      },
      {
        subject: 'Teste de Email',
        body: 'Testeeeee',
      }
    )

    return res.json({ emailReturn })
  },
}
