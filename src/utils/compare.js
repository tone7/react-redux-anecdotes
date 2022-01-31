const compare = (first, second) => {
    if(first.votes > second.votes){
        return -1
    } else if(first.votes === second.votes){
        return 0
    } else {
        return 1
    }
}

export default compare