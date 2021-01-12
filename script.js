				
var dictionary = [ 

{word: 'ಉದಾರ್ಮೆ', definition: ' Example, ಉದಾಹರಣೆ', tulu: 'ಯಾನ್ ನಿಕ್ಕ್ ಕೆಲವು ಉದಾರ್ಮೆಲೆನ್ ಕೊರ್ಪೆ'}, 

{word: 'ಒತ್ತುಪಾಲ್', definition: 'Presence, ಉಪಸ್ಥಿತಿ', tulu: 'ಇಣಯೊಡು ಇರೆನ/ನಿಕ್ಲೆನ ಒತ್ತುಪಾಲ್‌ನ್ ಬಯಕೊಂದುಲ್ಲ'}, 

{word: 'ಇಣಯೊ', definition: 'meeting, ಸಭೆ', tulu: 'ಆಯೆ ಕೋಡೆದ ಇಣಯೊಡು ಪಾಲ್‌ಪಡೆದ್‌ಜೆ'}, 

{word: 'Internet', definition: 'A series of tubes', tulu: 'a'},

{word: 'Internet', definition: 'A series of tubes', tulu: 'a'}, 

]; 

(function(){ 

var selection = dictionary[Math.floor(Math.random()*dictionary.length)]; 

for (var key in selection){ 

document.getElementById(key).innerHTML = selection[key]; 

} 

return; 

})(); 
