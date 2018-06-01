$(document).ready(function() {

	var vanBtn = $('#vanguardBtn');
	var assBtn = $('#assassinBtn');
	var spcBtn = $('#specialistBtn');
	var markBtn = $('#marksmanBtn');

	vanBtn.click(function(){
		var fadeInVanguardImg = $('#vanguardImg').fadeIn().siblings().hide();
		var fadeVanDesc = $('#vanguardDesc').fadeIn().siblings().hide();
		fadeInVanguardImg;
		fadeVanDesc;
	});

	assBtn.click(function(){
		var fadeInAssassinImg = $('#assassinImg').fadeIn().siblings().hide();
		var fadeAssDesc = $('#assassinDesc').fadeIn().siblings().hide();
		fadeInAssassinImg;
		fadeAssDesc;
	});

	spcBtn.click(function(){
		var fadeInSpecialistImg = $('#specialistImg').fadeIn().siblings().hide();
		var fadeSpcDesc = $('#specialistDesc').fadeIn().siblings().hide();
		fadeInSpecialistImg;
		fadeSpcDesc;
	});

	markBtn.click(function(){
		var fadeInMarksmanImg = $('#marksmanImg').fadeIn().siblings().hide();
		var fadeMarkDesc = $('#marksmanDesc').fadeIn().siblings().hide();
		fadeInMarksmanImg;
		fadeMarkDesc;
	});

	$('#playerName').keypress(function(e){
    if(e.target.value.length == 10){
        alert("You can have a maximum length of 10 characters for your name");
    };
});

});

var timedShowPage;

function loadPage() {
    timedShowPage = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderBackground").style.display = "none";
  document.getElementById("pageContent").style.display = "block";
}


var charName = new Vue({
	el: '#characterName',
	data: {
		name: '',
	},
})

var charStats = new Vue({
  el:'#characterStats',
  data: {
    str: 4,
    dex: 4,
    int: 4,
    remainSP: 10,
  },
  methods: {
	addStr: function(){
		if(this.remainSP > 0){
  			this.str++;
  		}
  	},
  	addDex: function(){
  		if(this.remainSP > 0){
  			this.dex++;
  		}
  	},
  	addInt: function(){
  		if(this.remainSP > 0){	
  			this.int++;
  		}
  	},
  	subStr: function(){
  		if(this.str > 4){
  			this.str--;
  			this.addRemainSP()
  		}
  	},
  	subDex: function(){
  		if(this.dex > 4){
  			this.dex--;
  			this.addRemainSP()
  		}
  	},
  	subInt: function(){
  		if(this.int > 4){
  			this.int--;
  			this.addRemainSP()
  		}
  	},
  	addRemainSP: function(){
  		if(this.remainSP < 10){
  			this.remainSP++;
  		}
  	},
  	subRemainSP: function(){
  		if(this.remainSP > 0){
  			this.remainSP--;
  		}
  	}
  },
});