/*
*************************************************

	SEBASTIAN NITU
	baseDemo Bootstrapping

	Created by Sebastian Nitu
	http://www.sebnitu.com

*************************************************
*/

/*-------------------------------------------
	Save Global Variables
---------------------------------------------*/

// Get the URL to this script directory
var scripts = document.getElementsByTagName('script');
var lastScript = scripts[scripts.length-1];
var myScript = lastScript.src;
var myScriptSrc = myScript.replace(/bootstrap.js/, '');

/*-------------------------------------------
	File Includes
---------------------------------------------*/

// Include baseDemo styles
// bd.styles.css 는 원본 서버에도 없어 404만 나므로 불러오지 않음
// Check if jQuery exists and include local version if not
!window.jQuery && document.write(unescape('%3Cscript src="' + myScriptSrc + 'bd.jquery.min.js"%3E%3C/script%3E'));
// Included baseDemo JavaScript
//document.write(unescape('%3Cscript src="' + myScriptSrc + 'bd.ui.js"%3E%3C/script%3E'));
// Mobile viewport optimized
document.write(unescape('%3Cmeta name="viewport" content="width=device-width, initial-scale=1.0"%3E'));

/*-------------------------------------------
	Fin
---------------------------------------------*/