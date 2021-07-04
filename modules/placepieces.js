export const BoardSetter = { 
    createElem: function(src){
        return document.createElement("img").setAttribute('src',src) 
    },

     placePiece: function(src, parent) {
        document.getElementById(parent).appendChild(this.createElem(src))
    },

    
}