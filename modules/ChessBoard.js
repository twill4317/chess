export const Board = {
    boardState: [
        [-5, -3, -3, -9, -10, -3, -3, -5],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [5, 3, 3, 9, 10, 3, 3, 5]
    ],
    
    reduceSpace(){
        let result = this.boardState.reduce(function(accum,list,firstIndex){
            accum.push(list.reduce(function(secaccu, item, secondIndex){
                item === null ? secaccu.push([firstIndex, secondIndex]): -1
                return secaccu
            }, [])) 
            return accum
        }, [])
        return result
    },

    whosMove: function(piece){
        switch(piece){
            case 1:
        }
    }
}