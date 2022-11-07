
// push front
function pushFront(arr, val){
    for (i=arr.length; i>=0; i--){
        arr[i] = arr[i-1]
    }
    arr[0]=val
    console.log(arr)

    return arr
}

pushFront([2,3,4,5,6,7,8], 1);

//pop front
// function popFront(arr){
//     arr.reverse();
//     console.log(arr[arr.length-1]);
//     arr.pop();
//     arr.reverse();
//     console.log(arr);
// }

//pop front
function popFront(arr){
    var firstVal = arr[0]

    for (i=0; i<arr.length; i++){
        arr[i] = arr[i+1]
    }

    arr.length = arr.length-1

    console.log(firstVal)
    console.log(arr)
}

popFront([5,3,5,7,3,6]);

// insert at
function insertAt(arr, index, val){

    for (i=arr.length; i>=index; i--){
        arr[i] = arr[i-1]
    }

    arr[index] = val

    console.log(arr)
    return arr
}

insertAt([1,2,3,4], 2, 5);

