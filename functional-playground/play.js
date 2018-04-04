import forEach from '../lib/es6-functional.js'

var array = [1,2,3,4,5,6,7]
forEach(array,(data) => console.log(data))

const unlessFn=(predicate,fn)=>{
	if(!predicate)
		fn()
}

var logFn=(number)=>{
	console.log(number," is even")
}


//forEach(array,
//	    (number)=>{
//			unlessFn((number%2),logFn(number))
//		}
//)


forEach(array,
		(number)=>{
			unlessFn((number%2),
				     ()=>{
						console.log(number," is even")
	               	 }
       	)
)
