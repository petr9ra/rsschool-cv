# Peter Grachev

## Contacts
* email: petr9ra@yandex.ru
* phone number: +375 33 318 33 87 (Viber/Telegram)
* discord: Petr Grachev#1240

## About me
I like to study and learn something new. I like to read books, do physical education, listen to music form various genres, good cars and bikes. I have active and healhy lifestyle. I like to work and see the results of my work.
Since childhood, I have a predisposition to work with electronics and computers. I like to disassemble, assemble and configure something. I can build, configure, solve problems with computers.
I live in Minsk.

## Skills
* Engineering
* HTML/CSS
* Knowledge about ServiceNow administration
* Initial knowledge of JS. I have been studying.

## Key strengths
* Hardworking
* Responsible
* Sociable
* Quick learner 
* Goal-oriented 
* Conscientious

## Education
* Belorusian State University of Informatics and Radioelecnronics, Information Technology and Technical System Management Engineer. (2012-2018)
* Completed a course in ServiceNow platform in EPAM. (2021)

## English
* Pre-Intermediate (A2)

## Code example
```
// Client Script (client side)
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    //	In the Client script call the function from Script include by Ajax. Send to the function next fields: previous Mark, new Mark, First mark, Average mark.
    var marks = new GlideAjax('PetrGrachevHWPractice04');
    marks.addParam('sysparm_name', 'compareMark');
    // get values from form
    marks.addParam('sysparm_newMark', newValue);
  	marks.addParam('sysparm_previousMark', oldValue);
  	marks.addParam('sysparm_firstMark', g_form.getValue('u_first_mark'));
  	marks.addParam('sysparm_averageMark', g_form.getValue('u_average_mark'));

    // get response from server side script by Sync Ajax
    marks.getXMLWait();
    var result = marks.getAnswer();
    g_form.addInfoMessage(result);

    // get response from server side script by Async Ajax (the second possibility)
      // marks.getXML(callback);
	    // function callback(response) {
	        // 	var answer = response.responseXML.documentElement.getAttribute("answer");
        	// 	g_form.addInfoMessage(answer);
    	// }
}

// Script Include (server side)
var PetrGrachevHWPractice04 = Class.create();
PetrGrachevHWPractice04.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    // Function will compare new mark with old, first and average marks.
    compareMark: function() {
        // get values from Client Script
        var newMark = this.getParameter('sysparm_newMark');
        var previousMark = this.getParameter('sysparm_previousMark');
        var firstMark = this.getParameter('sysparm_firstMark');
        var averageMark = this.getParameter('sysparm_averageMark');

        // forming a response
        var result = this._compareNewMarkAndMark(newMark, previousMark) + '\n' + this._compareNewMarkAndFirstMark(newMark, firstMark) + '\n' + this._compareNewMarkAndAverageMark(newMark, averageMark);
		    return result;
    },

    _compareNewMarkAndMark: function(newMark, previousMark) {
        if (+newMark > +previousMark) {
            return 'New mark is higher than old one.';
        } else if (+newMark < +previousMark) {
            return 'New mark is lower than old one.';
        }
    },

    _compareNewMarkAndFirstMark: function(newMark, firstMark) {
		if (+newMark > +firstMark) {
            return 'New mark is higher than first mark.';
        } else if (+newMark < +firstMark) {
            return 'New mark is lower than first mark.';
        } else if (+newMark == +firstMark) {
			return 'New mark is equal than first mark.';
		}
    },

    _compareNewMarkAndAverageMark: function(newMark, averageMark) {
		if (+newMark > +averageMark) {
            return 'New mark is higher than average one.';
        } else if (+newMark < +averageMark) {
            return 'New mark is lower than average mark.';
        } else if (+newMark == +averageMark) {
			return 'New mark is equal than average mark.';
		}
    },

    type: 'PetrGrachevHWPractice04'
});
```