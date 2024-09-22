import { Transacao } from "../entities"
import { Produto } from "../entities/produto"
import { Status } from "../entities/status"

export type PedidoProdutos = {
  cliente: string | null
  produtos: {
    produto: Produto
    quantidade: number
  }[]
  status: Status
  total: number
  senha: string
  transacao: Transacao | null
}
