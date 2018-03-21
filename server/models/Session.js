class Session{
    constructor({id,game,limit,location,date,buyin,cashout}){
        this.id = id
        this.game = game
        this.limit = limit
        this.location = location
        this.date = date
        this.buyin = buyin
        this.cashout = cashout
    }
}

module.exports = Session