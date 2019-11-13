import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ExpenseGridView from '@/components/ExpenseGridView.vue'

// *** INSTEAD OF MOCKING THE STORE, GET THE STORE AND MOCK REQUIRED STATES AND FUNCTIONS
import store from '../../src/store/expenseModule/expenseDetails'

let mocks = {
  $store: {
    state: {
      expenseDetails: store.state
    },
    commit: jest.fn()
  }
}
const localVue = createLocalVue()
localVue.use(Vuex)

describe('ExpenseGridView.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ExpenseGridView, {
      mocks, localVue
    })
  })

  it('then renders expense grid view', () => {
    expect(wrapper).toBeDefined()
    // console.log(wrapper.html())
  })

  it('then renders the add expense button', () => {
    const header = wrapper.findAll('.row').at(0)
    expect(header.html()).toContain('<button ')
    expect(header.html()).toContain('Add Expense')
  })

  it('then renders the transaction header', () => {
    const header = wrapper.findAll('.row').at(1)
    expect(header.html()).toContain('Description')
    expect(header.html()).toContain('Amount')
  })

  describe('When user has transaction', () => {
    mocks.$store.state.expenseDetails.transactions = [
      {
        id: 1,
        userId: 'user1',
        transType: 'DR',
        description: 'Banquest Hall Promo',
        amount: 120.20,
        tax: 25.10,
        category: 'PROM',
        categoryDescription: 'Business Promotions',
        transDate: '2019-11-10T00:00:00',
        status: 'New',
        updatedDate: '0001-01-01T00:00:00'
      }
    ]

    it('then renders the first transaction', () => {
      // row 2 col 1
      expect(wrapper.findAll('.row').at(2).findAll('div').at(1).text()).toMatch('2019-11-10')
      expect(wrapper.findAll('.row').at(2).findAll('div').at(2).text()).toMatch('Banquest Hall Promo')
      expect(wrapper.findAll('.row').at(2).findAll('div').at(3).text()).toMatch('120.2')
      expect(wrapper.findAll('.row').at(2).findAll('div').at(4).text()).toMatch('PROM')
    })

    it('then renders remove button for the transaction', () => {
      // row 2 col 6
      expect(wrapper.findAll('.row').at(2).findAll('div').at(6).html()).toContain('<button ')
    })

    describe('When remove button is clicked', () => {
      it('then store.commit has been called with tran id', () => {
        const btnrow = wrapper.findAll('.row').at(2).findAll('div').at(6)
        const btn = btnrow.find('button')
        btn.trigger('click', { id: 1 })
        expect(mocks.$store.commit).toHaveBeenCalled()
        // console.log('>>>==', mocks.$store.commit.mock.calls[0])
        expect(mocks.$store.commit.mock.calls[0][0]).toEqual('expenseDetails/setIsRemove')
        expect(mocks.$store.commit.mock.calls[0][1]).toEqual({ id: 1 })
      })

      describe('When remove button is clicked via wrapper component', () => {
        it('then removes the transaction from the grid', () => {
          wrapper.vm.remove({}, 1)
          expect(mocks.$store.commit).toHaveBeenCalled()
          expect(mocks.$store.commit.mock.calls[0][0]).toEqual('expenseDetails/setIsRemove')
          expect(mocks.$store.commit.mock.calls[0][1]).toEqual({ id: 1 })
        })
      })
    })
  })
})
