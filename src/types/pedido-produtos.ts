import {Produto, Transacao, Status } from "../entities"

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
