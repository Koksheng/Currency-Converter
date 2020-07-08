var app = new Vue ({
	el: '#app',
	data: {
		a: '0'
	},
	computed: {
		usd : function(){
			return this.a * 0.23
		}
	}
});

function check() {
	console.log(this);
}
check();

var app1 = new Vue ({
	el: '#app1',
	data: {
		a1: 0,
		b1: 0,
		BMI: 20
	},
	computed: {
		whoHeavy: function() {
			if (this.a1>this.b1) {
				return 'a1 more heavy'
			}else if (this.a1<this.b1) {
				return 'b1 more heavy'
			}else{
				return 'same heavy'
			}
		},
		judgeA: function(){
			return this.BMI - this.a1
		}
	} 
});
