var system = {};
system.planets = document.querySelectorAll('.planet');
console.log(system.planets);

for (var i = 0; i < system.planets.length; i++) {
	system.planets[i].addEventListener('click', function (e) {
		var targ = e.target.parentElement;
		if(targ.classList.contains('front')) {
			//mettre la suite, pas de changements
		}
		else if(targ.classList.contains('right')) {
			var front = document.querySelector('.front');
			var left = document.querySelector('.left');
			var back = document.querySelector('.back');
			front.style.animation = 'planetRotation 10s linear infinite, frontToLeft 0.5s linear';
			setTimeout(function() { 
				front.classList.add('left'); front.classList.remove('front'); front.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
			left.style.animation = 'planetRotation 10s linear infinite, leftToBack 0.5s linear';
			setTimeout(function() { 
				left.classList.add('back'); left.classList.remove('left'); left.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
			back.style.animation = 'planetRotation 10s linear infinite, backToRight 0.5s linear';
			setTimeout(function() { 
				back.classList.add('right'); back.classList.remove('back'); back.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
			targ.style.animation = 'planetRotation 10s linear infinite, rightToFront 0.5s linear';
			setTimeout(function() { 
				targ.classList.add('front'); targ.classList.remove('right'); targ.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
		}
		else if(targ.classList.contains('left')) {
			var front = document.querySelector('.front');
			var right = document.querySelector('.right');
			var back = document.querySelector('.back');
			front.style.animation = 'planetRotation 10s linear infinite, frontToRight 0.5s linear';
			setTimeout(function() { 
				front.classList.add('right'); front.classList.remove('front'); front.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
			right.style.animation = 'planetRotation 10s linear infinite, rightToBack 0.5s linear';
			setTimeout(function() { 
				right.classList.add('back'); right.classList.remove('right'); right.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
			back.style.animation = 'planetRotation 10s linear infinite, backToLeft 0.5s linear';
			setTimeout(function() { 
				back.classList.add('left'); back.classList.remove('back'); back.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
			targ.style.animation = 'planetRotation 10s linear infinite, leftToFront 0.5s linear';
			setTimeout(function() { 
				targ.classList.add('front'); targ.classList.remove('left'); targ.style.animation = 'planetRotation 10s linear infinite';
			}, 500);
		}
		else if(targ.classList.contains('back')) {
			var front = document.querySelector('.front');
			var left = document.querySelector('.left');
			var right = document.querySelector('.right');
		}
	});
}
