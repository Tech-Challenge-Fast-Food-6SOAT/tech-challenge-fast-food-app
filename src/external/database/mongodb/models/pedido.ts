import mongoose from "mongoose";
import { mongoConnection } from "../index"

const status = ['Recebido', 'Em preparação', 'Pronto', 'Finalizado']

const Schema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: [...status]
  },
  produtos: [
    {
      produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        required: true,
      },
      quantidade: {
        type: Number,
        required: true,
      }
    }
  ],
  cliente: {
    type: String,
  },
  total: {
    type: Number,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  transacao: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'transacoes',
  },
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})

Schema.index({ status: 1, createdAt: 1 })

export const PedidoModel = mongoConnection.model('pedidos', Schema)
