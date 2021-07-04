export const BoardSetter = { 
    createElem: function(src, parent){
        let elem = document.createElement("img");
        elem.setAttribute('src',src)
        document.getElementById(parent).appendChild(elem)
    },

     placePiece : function() {
        
    }
}