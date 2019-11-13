import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ExpensePage from '@/components/ExpensePage.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const mocks = {
  $store: {
    state: {
      expenseDetails: {
        transactions: [
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
        ],
        user: {
          userId: 'user1',
          approverId: 'user9',
          costCentre: 'IT1000'
        },
        expense: {
          isShowExpenses: true,
          submissionMessage: ''
        },
        errors: {
          userId: '',
          approverId: '',
          costCentre: ''
        },
        costCentreApprovals: [],
        approvals: []
      }
    }
  }
}

describe('ExpensePage.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ExpensePage, {
      mocks, localVue
    })
  })

  describe('When a user is logged in', () => {
    it('then renders expense page', () => {
      console.log(wrapper.html())
      expect(wrapper).toBeDefined()
    })

    it('then renders required child components', () => {
      expect(wrapper.html()).toContain('<userinfo-stub>')
      expect(wrapper.html()).toContain('<expensegridview-stub>')
      expect(wrapper.html()).toContain('<addexpensemodalpage-stub>')
      expect(wrapper.html()).toContain('<approverinfo-stub>')
      const btnSubmit = wrapper.find('.btn-success')
      expect(btnSubmit.text()).toBe('Submit')
      const btnCancel = wrapper.find('.btn-secondary')
      expect(btnCancel.text()).toBe('Cancel')
    })
  })

  describe('When a user is not logged in', () => {
    it('then renders a error message to log in', () => {
      mocks.$store.state.expenseDetails.user = { userId: '', approverId: '', costCentre: '' }
      expect(wrapper.html()).toContain('<b>Please login before accessing the form!</b>')
    })
  })
})
