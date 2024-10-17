import { screen } from '@testing-library/react'
import Header from '../index'
import { renderizaComProvider } from '../../../utils/tests'

describe('Teste do componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'rpg',
              imagem: '',
              plataformas: ['Windows'],
              titulo: 'Elden Ring',
              precoAntigo: 199.9,
              preco: 150
            },
            {
              id: 2,
              categoria: 'rpg',
              imagem: '',
              plataformas: ['Windows', 'PS5'],
              titulo: 'Elden Ring 22222',
              precoAntigo: 189.9,
              preco: 110
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
