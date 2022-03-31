const rl = require('readline')
const readline = rl.createInterface({
	input : process.stdin,output : process.stdout
})
let n = 0
let time = ''
const int = ()=>{
	time = setInterval(()=>{
		n++
	},1000)
}
const func = ()=>{
readline.question(">> [c] type | ",data=>{
	clearInterval(time)
	const datas = ((data.length)/n).toString().split('.')
	const float = () =>{
		if(data.length/n <= 0){
			return `${data.length}/${n}`
		}else if(data.length/n == Infinity){
			console.log("l")
			return 'god Speed'
		}
		return datas[0]
	}
	const appreciate = (nef)=>{
		if(nef >= 5){
			return "wow you so fast."
		}else if(nef >= 2){
			return "you fast good!"
		}else if(nef >= 1){
			return "great!"
		}else if(nef <= 0){
			return "you to slow haha."
		}else{
			return "i don't wanna appriciate you :V."
		}
	}
	console.log(">> [!] your speed is [\033[93m "+float(),"\033[97m] word(s) per seconds")
	console.log(">> [v]",appreciate(data.length/n))
	n = 0
	int()
	func()
})
}


func()
