// counter modifier 

function RealTimeUsers(){


    var _setStyles = function() {
        var css = '\
            .realtimeuserscounter--styled {\
              display: inline-block !important;\
              font-family: Monaco, Courier, "Courier New", monospace !important;\
            }\
            .realtimeuserscounter--styled .realtimeuserscounter__num {\
              display: inline-block !important;\
              padding: 0.35em 0.7em !important;\
              margin-bottom: 10px !important;\
              font-size: 22px !important;\
              background-color: #000 !important;\
              color: #fff !important;\
            }\
            .realtimeuserscounter__attr {\
              display: none !important;\
            }\
            .realtimeuserscounter--styled .realtimeuserscounter__attr:hover,\
            .realtimeuserscounter--styled .realtimeuserscounter__attr:focus,\
            .realtimeuserscounter--styled .realtimeuserscounter__attr:active {\
              color: #333 !important;\
        }',
           head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    };
}