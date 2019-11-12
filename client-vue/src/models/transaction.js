export default class Transaction {
  constructor (id, transType, description, amount, tax, transDate, category, isPersonal = false, isRemove = false, isOutOfPocket = false) {
    this.id = id
    this.transDate = transType
    this.description = description
    this.amount = amount
    this.tax = tax
    this.transDate = transDate
    this.category = category
    this.isPersonal = isPersonal
    this.isRemove = isRemove
    this.isOutOfPocket = isOutOfPocket
  }
}
