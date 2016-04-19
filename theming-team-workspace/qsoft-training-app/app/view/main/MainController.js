/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    onTopicTeamShow: function(){
        $('#amazing-wheel-container').empty();
        $('#amazing-wheel-container').html('<div align="center">\
                <h1 class="font-effect-fire-animation wheel-title-big">QSoft Training Lucky Wheel</h1>\
                <table class="lucky-table" cellpadding="0" cellspacing="0" border="0">\
                    <tr>\
                        <td>\
                            <div class="power_controls"><br /><br />\
                                <table class="power" cellpadding="10" cellspacing="0">\
                                    <tr><th align="center">Power</th></tr>\
                                    <tr><td width="78" align="center" id="pw3">High</td></tr>\
                                    <tr><td align="center" id="pw2">Med</td></tr>\
                                    <tr><td align="center" id="pw1">Low</td></tr>\
                                </table><br />\
                                <img id="spin_button" src="resources/images/spin_off.png" alt="Spin" title="Spin" /><br /><br />\
                                <img id="play_again" src="resources/images/play-again.png" alt="Play Again" title="Play Again" /><br />\
                            </div>\
                        </td>\
                        <td width="338" height="450" class="the_wheel" align="center" valign="center">\
                            <canvas id="canvas" width="334" height="334"></canvas>\
                        </td>\
                        <td align="left" valign="center" class="radio-option-container">\
                            <div class="radio-option-main"></div>\
                        </td>\
                    </tr>\
                </table>\
            </div>');
        
        if ( $( "#canvas" ).length ) { 
            function Winwheel(t,e){defaultOptions={canvasId:"canvas",centerX:null,centerY:null,outerRadius:null,innerRadius:0,numSegments:1,drawMode:"code",rotationAngle:0,textFontFamily:"Arial",textFontSize:20,textFontWeight:"bold",textOrientation:"horizontal",textAlignment:"center",textDirection:"normal",textMargin:null,textFillStyle:"black",textStrokeStyle:null,textLineWidth:1,fillStyle:"silver",strokeStyle:"black",lineWidth:1,clearTheCanvas:!0,imageOverlay:!1,drawText:!0,pointerAngle:0,wheelImage:null};for(var i in defaultOptions)null!=t&&"undefined"!=typeof t[i]?this[i]=t[i]:this[i]=defaultOptions[i];if(null!=t)for(var i in t)"undefined"==typeof this[i]&&(this[i]=t[i]);for(this.canvasId?(this.canvas=document.getElementById(this.canvasId),this.canvas?(null==this.centerX&&(this.centerX=this.canvas.width/2),null==this.centerY&&(this.centerY=this.canvas.height/2),null==this.outerRadius&&(this.canvas.width<this.canvas.height?this.outerRadius=this.canvas.width/2-this.lineWidth:this.outerRadius=this.canvas.height/2-this.lineWidth),this.ctx=this.canvas.getContext("2d")):(this.canvas=null,this.ctx=null)):(this.cavnas=null,this.ctx=null),this.segments=new Array(null),x=1;x<=this.numSegments;x++)null!=t&&t.segments&&"undefined"!=typeof t.segments[x-1]?this.segments[x]=new Segment(t.segments[x-1]):this.segments[x]=new Segment;this.updateSegmentSizes(),null===this.textMargin&&(this.textMargin=this.textFontSize/1.7),null!=t&&t.animation&&"undefined"!=typeof t.animation?this.animation=new Animation(t.animation):this.animation=new Animation,"image"==this.drawMode?("undefined"==typeof t.fillStyle&&(this.fillStyle=null),"undefined"==typeof t.strokeStyle&&(this.strokeStyle="red"),"undefined"==typeof t.drawText&&(this.drawText=!1),"undefined"==typeof t.lineWidth&&(this.lineWidth=1),"undefined"==typeof e&&(e=!1)):"undefined"==typeof e&&(e=!0),null!=t&&t.pointerGuide&&"undefined"!=typeof t.pointerGuide?this.pointerGuide=new PointerGuide(t.pointerGuide):this.pointerGuide=new PointerGuide,1==e&&this.draw(this.clearTheCanvas)}function Animation(t){defaultOptions={type:"spinOngoing",direction:"clockwise",propertyName:null,propertyValue:null,duration:10,yoyo:!1,repeat:0,easing:"power3.easeOut",stopAngle:null,spins:null,clearTheCanvas:null,callbackFinished:null,callbackBefore:null,callbackAfter:null};for(var e in defaultOptions)null!=t&&"undefined"!=typeof t[e]?this[e]=t[e]:this[e]=defaultOptions[e];if(null!=t)for(var e in t)"undefined"==typeof this[e]&&(this[e]=t[e])}function Segment(t){defaultOptions={topicId:null,size:null,text:"",fillStyle:null,strokeStyle:null,lineWidth:null,textFontFamily:null,textFontSize:null,textFontWeight:null,textOrientation:null,textAlignment:null,textDirection:null,textMargin:null,textFillStyle:null,textStrokeStyle:null,textLineWidth:null};for(var e in defaultOptions)null!=t&&"undefined"!=typeof t[e]?this[e]=t[e]:this[e]=defaultOptions[e];if(null!=t)for(var e in t)"undefined"==typeof this[e]&&(this[e]=t[e]);this.startAngle=0,this.endAngle=0}function PointerGuide(t){defaultOptions={display:!1,strokeStyle:"red",lineWidth:3};for(var e in defaultOptions)null!=t&&"undefined"!=typeof t[e]?this[e]=t[e]:this[e]=defaultOptions[e]}function winwheelPercentToDegrees(t){var e=0;if(t>0&&100>=t){var i=t/100;e=360*i}return e}function winwheelAnimationLoop(){winwheelToDrawDuringAnimation&&(0!=winwheelToDrawDuringAnimation.animation.clearTheCanvas&&winwheelToDrawDuringAnimation.ctx.clearRect(0,0,winwheelToDrawDuringAnimation.canvas.width,winwheelToDrawDuringAnimation.canvas.height),null!=winwheelToDrawDuringAnimation.animation.callbackBefore&&eval(winwheelToDrawDuringAnimation.animation.callbackBefore),winwheelToDrawDuringAnimation.draw(!1),null!=winwheelToDrawDuringAnimation.animation.callbackAfter&&eval(winwheelToDrawDuringAnimation.animation.callbackAfter))}function winwheelStopAnimation(canCallback){TweenMax.ticker.removeEventListener("tick",winwheelAnimationLoop),0!=canCallback&&null!=winwheelToDrawDuringAnimation.animation.callbackFinished&&eval(winwheelToDrawDuringAnimation.animation.callbackFinished)}Winwheel.prototype.updateSegmentSizes=function(){if(this.segments){var t=0,e=0;for(x=1;x<=this.numSegments;x++)null!==this.segments[x].size&&(t+=this.segments[x].size,e++);var i=360-t,n=0;i>0&&(n=i/(this.numSegments-e));var s=0;for(x=1;x<=this.numSegments;x++)this.segments[x].startAngle=s,s+=this.segments[x].size?this.segments[x].size:n,this.segments[x].endAngle=s}},Winwheel.prototype.clearCanvas=function(){this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},Winwheel.prototype.draw=function(t){this.ctx&&("undefined"!=typeof t?1==t&&this.clearCanvas():this.clearCanvas(),"image"==this.drawMode?(this.drawWheelImage(),1==this.drawText&&this.drawSegmentText(),1==this.imageOverlay&&this.drawSegments()):(this.drawSegments(),1==this.drawText&&this.drawSegmentText()),1==this.pointerGuide.display&&this.drawPointerGuide())},Winwheel.prototype.drawPointerGuide=function(){this.ctx&&(this.ctx.save(),this.ctx.translate(this.canvas.width/2,this.canvas.height/2),this.ctx.rotate(this.degToRad(this.pointerAngle)),this.ctx.translate(-this.canvas.width/2,-this.canvas.height/2),this.ctx.strokeStyle=this.pointerGuide.strokeStyle,this.ctx.lineWidth=this.pointerGuide.lineWidth,this.ctx.beginPath(),this.ctx.moveTo(this.canvas.width/2,this.canvas.height/2),this.ctx.lineTo(this.centerX,-(this.outerRadius/5)),this.ctx.stroke(),this.ctx.restore())},Winwheel.prototype.drawWheelImage=function(){if(null!=this.wheelImage){var t=this.centerX-this.wheelImage.height/2,e=this.centerY-this.wheelImage.width/2;this.ctx.save(),this.ctx.translate(this.canvas.width/2,this.canvas.height/2),this.ctx.rotate(this.degToRad(this.rotationAngle)),this.ctx.translate(-this.canvas.width/2,-this.canvas.height/2),this.ctx.drawImage(this.wheelImage,t,e),this.ctx.restore()}},Winwheel.prototype.drawSegments=function(){if(this.ctx&&this.segments)for(x=1;x<=this.numSegments;x++){seg=this.segments[x];var t,e,i;t=null!==seg.fillStyle?seg.fillStyle:this.fillStyle,this.ctx.fillStyle=t,e=null!==seg.lineWidth?seg.lineWidth:this.lineWidth,this.ctx.lineWidth=e,i=null!==seg.strokeStyle?seg.strokeStyle:this.strokeStyle,this.ctx.strokeStyle=i,(i||t)&&(this.ctx.beginPath(),this.innerRadius||this.ctx.moveTo(this.centerX,this.centerY),this.ctx.arc(this.centerX,this.centerY,this.outerRadius,this.degToRad(seg.startAngle+this.rotationAngle-90),this.degToRad(seg.endAngle+this.rotationAngle-90),!1),this.innerRadius?this.ctx.arc(this.centerX,this.centerY,this.innerRadius,this.degToRad(seg.endAngle+this.rotationAngle-90),this.degToRad(seg.startAngle+this.rotationAngle-90),!0):this.ctx.lineTo(this.centerX,this.centerY),t&&this.ctx.fill(),i&&this.ctx.stroke())}},Winwheel.prototype.drawSegmentText=function(){if(this.ctx){var t,e,i,n,s,a,h,r,o,l,c;for(x=1;x<=this.numSegments;x++){if(this.ctx.save(),seg=this.segments[x],seg.text)if(t=null!==seg.textFontFamily?seg.textFontFamily:this.textFontFamily,e=null!==seg.textFontSize?seg.textFontSize:this.textFontSize,i=null!==seg.textFontWeight?seg.textFontWeight:this.textFontWeight,n=null!==seg.textOrientation?seg.textOrientation:this.textOrientation,s=null!==seg.textAlignment?seg.textAlignment:this.textAlignment,a=null!==seg.textDirection?seg.textDirection:this.textDirection,h=null!==seg.textMargin?seg.textMargin:this.textMargin,r=null!==seg.textFillStyle?seg.textFillStyle:this.textFillStyle,o=null!==seg.textStrokeStyle?seg.textStrokeStyle:this.textStrokeStyle,l=null!==seg.textLineWidth?seg.textLineWidth:this.textLineWidth,c="",null!=i&&(c+=i+" "),null!=e&&(c+=e+"px "),null!=t&&(c+=t),this.ctx.font=c,this.ctx.fillStyle=r,this.ctx.strokeStyle=o,this.ctx.lineWidth=l,"reversed"==a){if("horizontal"==n){"inner"==s?this.ctx.textAlign="right":"outer"==s?this.ctx.textAlign="left":this.ctx.textAlign="center",this.ctx.textBaseline="middle";var g=this.degToRad(seg.endAngle-(seg.endAngle-seg.startAngle)/2+this.rotationAngle-90-180);this.ctx.save(),this.ctx.translate(this.canvas.width/2,this.canvas.height/2),this.ctx.rotate(g),this.ctx.translate(-this.canvas.width/2,-this.canvas.height/2),"inner"==s?(r&&this.ctx.fillText(seg.text,this.centerX-this.innerRadius-h,this.centerY),o&&this.ctx.strokeText(seg.text,this.centerX-this.innerRadius-h,this.centerY)):"outer"==s?(r&&this.ctx.fillText(seg.text,this.centerX-this.outerRadius+h,this.centerY),o&&this.ctx.strokeText(seg.text,this.centerX-this.outerRadius+h,this.centerY)):(r&&this.ctx.fillText(seg.text,this.centerX-this.innerRadius-(this.outerRadius-this.innerRadius)/2-h,this.centerY),o&&this.ctx.strokeText(seg.text,this.centerX-this.innerRadius-(this.outerRadius-this.innerRadius)/2-h,this.centerY)),this.ctx.restore()}else if("vertical"==n){this.ctx.textAlign="center","inner"==s?this.ctx.textBaseline="top":"outer"==s?this.ctx.textBaseline="bottom":this.ctx.textBaseline="middle";var g=seg.endAngle-(seg.endAngle-seg.startAngle)/2-180;if(g+=this.rotationAngle,this.ctx.save(),this.ctx.translate(this.centerX,this.centerY),this.ctx.rotate(this.degToRad(g)),this.ctx.translate(-this.centerX,-this.centerY),"outer"==s)var u=this.centerY+this.outerRadius-h;else if("inner"==s)var u=this.centerY+this.innerRadius+h;var d=e-e/9;if("outer"==s)for(var m=seg.text.length-1;m>=0;m--)character=seg.text.charAt(m),r&&this.ctx.fillText(character,this.centerX,u),o&&this.ctx.strokeText(character,this.centerX,u),u-=d;else if("inner"==s)for(var m=0;m<seg.text.length;m++)character=seg.text.charAt(m),r&&this.ctx.fillText(character,this.centerX,u),o&&this.ctx.strokeText(character,this.centerX,u),u+=d;else if("center"==s){var p=0;seg.text.length>1&&(p=d*(seg.text.length-1)/2);for(var u=this.centerY+this.innerRadius+(this.outerRadius-this.innerRadius)/2+p+h,m=seg.text.length-1;m>=0;m--)character=seg.text.charAt(m),r&&this.ctx.fillText(character,this.centerX,u),o&&this.ctx.strokeText(character,this.centerX,u),u-=d}this.ctx.restore()}else if("curved"==n){var f=0;"inner"==s?(f=this.innerRadius+h,this.ctx.textBaseline="top"):"outer"==s?(f=this.outerRadius-h,this.ctx.textBaseline="bottom"):"center"==s&&(f=this.innerRadius+h+(this.outerRadius-this.innerRadius)/2,this.ctx.textBaseline="middle");var w=0,A=0;for(seg.text.length>1?(this.ctx.textAlign="left",w=4*(e/10),radiusPercent=100/f,w*=radiusPercent,totalArc=w*seg.text.length,A=seg.startAngle+((seg.endAngle-seg.startAngle)/2-totalArc/2)):(A=seg.startAngle+(seg.endAngle-seg.startAngle)/2,this.ctx.textAlign="center"),A+=this.rotationAngle,A-=180,m=seg.text.length;m>=0;m--)this.ctx.save(),character=seg.text.charAt(m),this.ctx.translate(this.centerX,this.centerY),this.ctx.rotate(this.degToRad(A)),this.ctx.translate(-this.centerX,-this.centerY),o&&this.ctx.strokeText(character,this.centerX,this.centerY+f),r&&this.ctx.fillText(character,this.centerX,this.centerY+f),A+=w,this.ctx.restore()}}else if("horizontal"==n){"inner"==s?this.ctx.textAlign="left":"outer"==s?this.ctx.textAlign="right":this.ctx.textAlign="center",this.ctx.textBaseline="middle";var g=this.degToRad(seg.endAngle-(seg.endAngle-seg.startAngle)/2+this.rotationAngle-90);this.ctx.save(),this.ctx.translate(this.centerX,this.centerY),this.ctx.rotate(g),this.ctx.translate(-this.centerX,-this.centerY),"inner"==s?(r&&this.ctx.fillText(seg.text,this.centerX+this.innerRadius+h,this.centerY),o&&this.ctx.strokeText(seg.text,this.centerX+this.innerRadius+h,this.centerY)):"outer"==s?(r&&this.ctx.fillText(seg.text,this.centerX+this.outerRadius-h,this.centerY),o&&this.ctx.strokeText(seg.text,this.centerX+this.outerRadius-h,this.centerY)):(r&&this.ctx.fillText(seg.text,this.centerX+this.innerRadius+(this.outerRadius-this.innerRadius)/2+h,this.centerY),o&&this.ctx.strokeText(seg.text,this.centerX+this.innerRadius+(this.outerRadius-this.innerRadius)/2+h,this.centerY)),this.ctx.restore()}else if("vertical"==n){this.ctx.textAlign="center","inner"==s?this.ctx.textBaseline="bottom":"outer"==s?this.ctx.textBaseline="top":this.ctx.textBaseline="middle";var g=seg.endAngle-(seg.endAngle-seg.startAngle)/2;if(g+=this.rotationAngle,this.ctx.save(),this.ctx.translate(this.centerX,this.centerY),this.ctx.rotate(this.degToRad(g)),this.ctx.translate(-this.centerX,-this.centerY),"outer"==s)var u=this.centerY-this.outerRadius+h;else if("inner"==s)var u=this.centerY-this.innerRadius-h;var d=e-e/9;if("outer"==s)for(var m=0;m<seg.text.length;m++)character=seg.text.charAt(m),r&&this.ctx.fillText(character,this.centerX,u),o&&this.ctx.strokeText(character,this.centerX,u),u+=d;else if("inner"==s)for(var m=seg.text.length-1;m>=0;m--)character=seg.text.charAt(m),r&&this.ctx.fillText(character,this.centerX,u),o&&this.ctx.strokeText(character,this.centerX,u),u-=d;else if("center"==s){var p=0;seg.text.length>1&&(p=d*(seg.text.length-1)/2);for(var u=this.centerY-this.innerRadius-(this.outerRadius-this.innerRadius)/2-p-h,m=0;m<seg.text.length;m++)character=seg.text.charAt(m),r&&this.ctx.fillText(character,this.centerX,u),o&&this.ctx.strokeText(character,this.centerX,u),u+=d}this.ctx.restore()}else if("curved"==n){var f=0;"inner"==s?(f=this.innerRadius+h,this.ctx.textBaseline="bottom"):"outer"==s?(f=this.outerRadius-h,this.ctx.textBaseline="top"):"center"==s&&(f=this.innerRadius+h+(this.outerRadius-this.innerRadius)/2,this.ctx.textBaseline="middle");var w=0,A=0;for(seg.text.length>1?(this.ctx.textAlign="left",w=4*(e/10),radiusPercent=100/f,w*=radiusPercent,totalArc=w*seg.text.length,A=seg.startAngle+((seg.endAngle-seg.startAngle)/2-totalArc/2)):(A=seg.startAngle+(seg.endAngle-seg.startAngle)/2,this.ctx.textAlign="center"),A+=this.rotationAngle,m=0;m<seg.text.length;m++)this.ctx.save(),character=seg.text.charAt(m),this.ctx.translate(this.centerX,this.centerY),this.ctx.rotate(this.degToRad(A)),this.ctx.translate(-this.centerX,-this.centerY),o&&this.ctx.strokeText(character,this.centerX,this.centerY-f),r&&this.ctx.fillText(character,this.centerX,this.centerY-f),A+=w,this.ctx.restore()}this.ctx.restore()}}},Winwheel.prototype.degToRad=function(t){return.017453292519943295*t},Winwheel.prototype.setCenter=function(t,e){this.centerX=t,this.centerY=e},Winwheel.prototype.addSegment=function(t,e){newSegment=new Segment(t),this.numSegments++;var i;if("undefined"!=typeof e){for(var n=this.numSegments;n>e;n--)this.segments[n]=this.segments[n-1];this.segments[e]=newSegment,i=e}else this.segments[this.numSegments]=newSegment,i=this.numSegments;return this.updateSegmentSizes(),this.segments[i]},Winwheel.prototype.setCanvasId=function(t){t?(this.canvasId=t,this.canvas=document.getElementById(this.canvasId),this.canvas&&(this.ctx=this.canvas.getContext("2d"))):(this.canvasId=null,this.ctx=null,this.canvas=null)},Winwheel.prototype.deleteSegment=function(t){if("undefined"!=typeof t)for(var e=t;e<this.numSegments;e++)this.segments[e]=this.segments[e+1];this.segments[this.numSegments]=void 0,this.numSegments--,this.updateSegmentSizes()},Winwheel.prototype.windowToCanvas=function(t,e){var i=this.canvas.getBoundingClientRect();return{x:Math.floor(t-i.left*(this.canvas.width/i.width)),y:Math.floor(e-i.top*(this.canvas.height/i.height))}},Winwheel.prototype.getSegmentAt=function(t,e){var i=null,n=this.getSegmentNumberAt(t,e);return null!==n&&(i=this.segments[n]),i},Winwheel.prototype.getSegmentNumberAt=function(t,e){var i,n,s,a,h,r=this.windowToCanvas(t,e);r.x>this.centerX?(s=r.x-this.centerX,n="R"):(s=this.centerX-r.x,n="L"),r.y>this.centerY?(a=r.y-this.centerY,i="B"):(a=this.centerY-r.y,i="T");var o=a/s,l=180*Math.atan(o)/Math.PI,c=0;if(h=Math.sqrt(a*a+s*s),"T"==i&&"R"==n?c=Math.round(90-l):"B"==i&&"R"==n?c=Math.round(l+90):"B"==i&&"L"==n?c=Math.round(90-l+180):"T"==i&&"L"==n&&(c=Math.round(l+270)),0!=this.rotationAngle){var g=this.getRotationPosition();c-=g,0>c&&(c=360-Math.abs(c))}for(var u=null,t=1;t<=this.numSegments;t++)if(c>=this.segments[t].startAngle&&c<=this.segments[t].endAngle&&h>=this.innerRadius&&h<=this.outerRadius){u=t;break}return u},Winwheel.prototype.getIndicatedSegment=function(){var t=this.getIndicatedSegmentNumber();return this.segments[t]},Winwheel.prototype.getIndicatedSegmentNumber=function(){var t=0,e=this.getRotationPosition(),i=Math.floor(this.pointerAngle-e);for(0>i&&(i=360-Math.abs(i)),x=1;x<this.segments.length;x++)if(i>=this.segments[x].startAngle&&i<=this.segments[x].endAngle){t=x;break}return t},Winwheel.prototype.getRotationPosition=function(){var t=this.rotationAngle;if(t>=0){if(t>360){var e=Math.floor(t/360);t-=360*e}}else{if(-360>t){var e=Math.ceil(t/360);t-=360*e}t=360+t}return t},Winwheel.prototype.startAnimation=function(){if(this.animation){this.computeAnimation(),winwheelToDrawDuringAnimation=this,TweenMax.ticker.addEventListener("tick",winwheelAnimationLoop);var t=new Array(null);t[this.animation.propertyName]=this.animation.propertyValue,t.yoyo=this.animation.yoyo,t.repeat=this.animation.repeat,t.ease=this.animation.easing,t.onComplete=winwheelStopAnimation,this.tween=TweenMax.to(this,this.animation.duration,t)}},Winwheel.prototype.stopAnimation=function(t){if(winwheelToDrawDuringAnimation==null){return false;}winwheelToDrawDuringAnimation.tween.kill(),winwheelToDrawDuringAnimation=this,winwheelStopAnimation(t)},Winwheel.prototype.pauseAnimation=function(){this.tween&&this.tween.pause()},Winwheel.prototype.resumeAnimation=function(){this.tween&&this.tween.play()},Winwheel.prototype.computeAnimation=function(){this.animation&&("spinOngoing"==this.animation.type?(this.animation.propertyName="rotationAngle",null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=-1),null==this.animation.easing&&(this.animation.easing="Linear.easeNone"),null==this.animation.yoyo&&(this.animation.yoyo=!1),this.animation.propertyValue=360*this.animation.spins,"anti-clockwise"==this.animation.direction&&(this.animation.propertyValue=0-this.animation.propertyValue)):"spinToStop"==this.animation.type?(this.animation.propertyName="rotationAngle",null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=0),null==this.animation.easing&&(this.animation.easing="Power4.easeOut"),null==this.animation.stopAngle?this.animation._stopAngle=Math.floor(359*Math.random()):this.animation._stopAngle=360-this.animation.stopAngle,null==this.animation.yoyo&&(this.animation.yoyo=!1),this.animation.propertyValue=360*this.animation.spins,"anti-clockwise"==this.animation.direction?(this.animation.propertyValue=0-this.animation.propertyValue,this.animation.propertyValue-=360-this.animation._stopAngle):this.animation.propertyValue+=this.animation._stopAngle):"spinAndBack"==this.animation.type?(this.animation.propertyName="rotationAngle",null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=1),null==this.animation.easing&&(this.animation.easing="Power2.easeInOut"),null==this.animation.yoyo&&(this.animation.yoyo=!0),null==this.animation.stopAngle?this.animation._stopAngle=0:this.animation._stopAngle=360-this.animation.stopAngle,this.animation.propertyValue=360*this.animation.spins,"anti-clockwise"==this.animation.direction?(this.animation.propertyValue=0-this.animation.propertyValue,this.animation.propertyValue-=360-this.animation._stopAngle):this.animation.propertyValue+=this.animation._stopAngle):"custom"==this.animation.type)},Winwheel.prototype.getRandomForSegment=function(t){var e=0;if(t&&"undefined"!=typeof this.segments[t]){var i=this.segments[t].startAngle,n=this.segments[t].endAngle,s=n-i-2;s>0&&(e=i+1+Math.floor(Math.random()*s))}return e};var winwheelToDrawDuringAnimation=null;
            // Create new wheel object specifying the parameters at creation time.                                  
            
            var topicStore = Ext.getCmp('topiclistall').getStore();
            var teamStore = Ext.getCmp('teamlistall').getStore();
            
            // Origin colors
            //var arrayColorSegments = ['#eae56f', '#89f26e', '#7de6ef', '#e7706f'];
            
            // Chosen colors
            var arrayColorSegments = ['#9ACD32', '#FFFF00', '#EE82EE', '#40E0D0', '#00FF7F', '#FF8C00', '#FF1493', '#ADFF2F', '#F08080', '#FFA07A', '#F0E68C', '#CD5C5C', '#00BFFF'];
            
            // Flat color
            //var arrayColorSegments = ['#1ABC9C', '#F1C40F', '#9b59b6', '#3498db', '#e74c3c', '#f39c12', '#95a5a6'];
            var arraySegments = [];
            var arrayTeam = [];
            var arrayTeamAlreadySelected = [];
            var tmpObject = new Object();
            var indexColor = 0;

            if (topicStore.data.items.length > 0) {
                topicStore.data.items.forEach(function(entry) {
                    if (entry.data.team_id == null) {
                        tmpObject = {'fillStyle' : arrayColorSegments[indexColor], 'text' : entry.data.name, 'topicId' : entry.data._id};
                        arraySegments.push(tmpObject);
                        indexColor++;
                    } else {
                        arrayTeamAlreadySelected.push(entry.data.team_id);
                    }
                });
            }
            

            if (teamStore.data.items.length > 0) {
                teamStore.data.items.forEach(function(entry) {
                    if (arrayTeamAlreadySelected.indexOf(entry.data._id) == -1) {
                        arrayTeam.push(entry.data);
                    } 
                });
            }            
            
            var optionList = '<span class="select-team-to-wheel">Select Team</span>';
            arrayTeam.forEach(function(entry) {
                optionList = optionList + '<div class="single-option" id="single-option-wheel-' + entry._id + '">\
                        <input type="radio" id="team-radio-wheel-' + entry._id + '" name="selectTeam" value="' + entry._id + '" />\
                        <label for="team-radio-wheel-' + entry._id + '"><span></span>' + entry.name + '</label>\
                    </div>';
            });

            $('.radio-option-main').html(optionList);

            $(".radio-option-main input:radio:first").attr('checked', true);
            
            $(".radio-option-main input:radio").on('click', function(){
                if (wheelSpinning == false) {
                    console.log('A team has been selected');
                } else {
                    return false;
                }
            });
            
            var theWheel = new Winwheel({
                'numSegments'  : arraySegments.length,
                'outerRadius'  : 162,
                'textFontSize' : 12,
                'segments'     : arraySegments,
                'animation' :
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,
                    'spins'    : arraySegments.length,
                    'callbackFinished' : 'alertPrize()'
                }
            });            
            
            // Vars used by the code in this page to do power controls.
            var wheelPower    = 0;
            var wheelSpinning = false;
            
            // -------------------------------------------------------
            // Function to handle the onClick on the power buttons.
            // -------------------------------------------------------
            function powerSelected(powerLevel)
            {
                if (arrayTeam.length == 0 || arraySegments == 0) {
                    return false;
                }
                // Ensure that power can't be changed while wheel is spinning.
                if (wheelSpinning == false)
                {
                    // Reset all to grey incase this is not the first time the user has selected the power.
                    document.getElementById('pw1').className = "";
                    document.getElementById('pw2').className = "";
                    document.getElementById('pw3').className = "";
                    
                    // Now light up all cells below-and-including the one selected by changing the class.
                    if (powerLevel >= 1)
                    {
                        document.getElementById('pw1').className = "pw1";
                    }
                        
                    if (powerLevel >= 2)
                    {
                        document.getElementById('pw2').className = "pw2";
                    }
                        
                    if (powerLevel >= 3)
                    {
                        document.getElementById('pw3').className = "pw3";
                    }
                    
                    // Set wheelPower var used when spin button is clicked.
                    wheelPower = powerLevel;
                    
                    // Light up the spin button by changing it's source image and adding a clickable class to it.
                    document.getElementById('spin_button').src = "resources/images/spin_on.png";
                    document.getElementById('spin_button').className = "clickable";
                }
            }
            
            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false)
                {
                    // Based on the power level selected adjust the number of spins for the wheel, the more times is has
                    // to rotate with the duration of the animation the quicker the wheel spins.
                    if (wheelPower == 0) {
                        return false;
                    }
                    if (wheelPower == 1)
                    {
                        theWheel.animation.spins = 3;
                    }
                    else if (wheelPower == 2)
                    {
                        theWheel.animation.spins = 8;
                    }
                    else if (wheelPower == 3)
                    {
                        theWheel.animation.spins = 15;
                    }
                    
                    // Disable the spin button so can't click again while wheel is spinning.
                    document.getElementById('spin_button').src       = "resources/images/spin_off.png";
                    document.getElementById('spin_button').className = "";
                    
                    // Begin the spin animation by calling startAnimation on the wheel object.
                    theWheel.startAnimation();
                    
                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = true;
                }
            }
            
            // -------------------------------------------------------
            // Function for reset button.
            // -------------------------------------------------------
            function resetWheel()
            {
                wheelPower = 0;
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.
                $(".radio-option-main input:radio:first").attr('checked', true);
                
                document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
                document.getElementById('pw2').className = "";
                document.getElementById('pw3').className = "";
                
                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }
               
            // -------------------------------------------------------
            // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
            // -------------------------------------------------------
            function alertPrize()
            {
                // Get the segment indicated by the pointer on the wheel background which is at 0 degrees.
                var winningSegment = theWheel.getIndicatedSegment();
                
                // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
                if(winningSegment != null) {
                    var teamId = $(".radio-option-main input:radio:checked").val();
                    var teamName = $(".radio-option-main input:radio:checked + label").text();

                    var messageResult = "Congratulations, <b>" + teamName + "</b> won: " + "<b>" + winningSegment.text + "</b>!!!";
                    
                    // Remove Team and Topic, call ajax to save topic team record
                    
                    var topicParams = new Object();
                    topicParams.name = winningSegment.text;
                    topicParams.team_id = teamId;            
                    topicParams.token = localStorage.getItem("tokenKey");

                    var ajaxUrl = QsoftTrainingApp.common.variable.Global.baseApiURL + 'topics/' + winningSegment.topicId;
                    var method = 'PUT';
                    var textMessage = 'update';    

                    Ext.Ajax.request({
                        url: ajaxUrl,
                        method: method,
                        params: topicParams,
                        success: function (response) {
                            if (response.status == '200') {
                                QsoftTrainingApp.common.function.CommonFunction.reloadStore();
                                $.jAlert({
                                    'title': 'Lucky Wheel Result',
                                    'content': messageResult,
                                    'size': 'md',
                                    'showAnimation': 'flipInX',
                                    'hideAnimation': 'flipOutX',
                                    'closeBtnAlt': true,                        
                                    'theme': 'green',
                                    'btns': { 'text': 'Close', 'theme': 'black' },
                                    'onClose': function(alertElem){
                                        // Remove segment and option
                                        theWheel.deleteSegment(theWheel.getIndicatedSegmentNumber());
                                        theWheel.draw();
                                        var radioToRemove = '#single-option-wheel-' + teamId;
                                        $(radioToRemove).remove();                                        
                                    }
                                });                                
                            }                    
                        },
                        failure: function (response) {
                            var messageShow = 'Error, ' + textMessage + ' topic failed';

                            if (response.status == '412') {
                                var textReturn = Ext.decode(response.responseText);
                                var validationObject = textReturn.validation;
                                var messageError = validationObject[Object.keys(validationObject)[0]];
                                $.jAlert({
                                    'title': messageShow,
                                    'content': messageError,
                                    'size': 'md',
                                    'showAnimation': 'flipInX',
                                    'hideAnimation': 'flipOutX',
                                    'closeBtnAlt': true,                        
                                    'theme': 'red',
                                    'btns': { 'text': 'Close', 'theme': 'black' }
                                });
                            } else {
                                $.jAlert({
                                    'title': messageShow,
                                    'content': Ext.decode(response.responseText),
                                    'size': 'md',
                                    'showAnimation': 'flipInX',
                                    'hideAnimation': 'flipOutX',
                                    'closeBtnAlt': true,                        
                                    'theme': 'red',
                                    'btns': { 'text': 'Close', 'theme': 'black' }
                                });
                            }
                        }
                    });
                    
                    
                }                
            }
            
            $('#spin_button').on('click', function() {
                startSpin(); 
            });
            
            $('#play_again').on('click', function() {
                resetWheel(); 
            });
            
            $('#pw3').on('click', function() {
                powerSelected(3);
            });
            
            $('#pw1').on('click', function() {
                powerSelected(1);
            });
            
            $('#pw2').on('click', function() {
                powerSelected(2);
            });

        }
    },
    
    onLogoutClick: function () {
        var baseApiURL = QsoftTrainingApp.common.variable.Global.baseApiURL;
        
        var apiURL = baseApiURL + 'users/' + localStorage.getItem("userLoggedInID") + '/logout';                
        
        var logoutParams = new Object();
        logoutParams.token = localStorage.getItem("tokenKey");
        
        var that = this;
        Ext.Ajax.request({
            url: apiURL,
            method: 'POST',
            params: logoutParams,
            success: function(response, opts) {
                //locate the people connections entry point                        
                // Remove the localStorage key/value
                localStorage.removeItem('tokenKey');
                localStorage.removeItem('userLoggedInID');
                localStorage.removeItem('username');
                localStorage.removeItem('role');

                // Remove Main View
                that.getView().destroy();

                // Add the Login Window
                Ext.create({
                    xtype: 'login'
                });                     
            },
            failure: function(response, opts) {                 
                Ext.Msg.show({
                    title: 'Logout failed',
                    msg: Ext.decode(response.responseText),
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                }); 
            },
            headers: {
                'Accept': 'application/json'
            }
        });                       
    },

    onAboutMeShow: function () {
        var clickCount = 0;
        var content = '<div class="content">\
            <div class="content-container">\
                <div class="avatar-image-container">\
                    <div class="avatar-image animated tada"></div>\
                </div>\
                <div class="user-information">\
                    <ul class="key-features">\
                        <li class="first-key-feature">3.5 years experienced in Web development at QSoft Vietnam Co.,</li>\
                        <li class="second-key-feature">Frontend, Backend and APIs developer</li>\
                        <li class="third-key-feature"><b>Specialties:</b> \
                            <ul>\
                                <li>Mobile (Games, Apps) API development, Web application development</li>\
                                <li>PHP (Zend Framework 1.x & 2.x, Symfony, Laravel, Phalcon, Prado, Drupal, Wordpress)</li>\
                                <li>JavaScript (jQuery, jQuery Mobile, AngularJS, ExtJS), (X)HTML</li>\
                                <li>CSS, Twitter Bootstrap, Responsive, MySQL, Multi Programming Languages Adaption</li>\
                            </ul>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </div>';

        $('.about-me-section .content').empty();
        $('.about-me-section').html('<header><h1><a href="#">Vu Quang Son</a></h1><header>');
        $('.about-me-section').append(content);
        $('.about-me-section .content').on('click', function(){
            $('.about-me-section .key-features').css('background', 'none');
            if(clickCount == 0) {
                $('.about-me-section .first-key-feature').addClass('visible animated fadeInUp');
            } else if(clickCount == 1) {
                $('.about-me-section .second-key-feature').addClass('visible animated tada');
            } else if(clickCount == 2) {
                $('.about-me-section .third-key-feature').addClass('visible animated lightSpeedIn');
            }
            clickCount++;
        });
    },
    onAboutAppShow: function () {
        var clickCount = 0;
        var content = '<div class="content">\
            <div class="content-container">\
                <h2>Project key features</h2>\
                <ul class="key-features">\
                    <li class="first-key-feature"><b>Brief:</b> \
                        <ul>\
                            <li>Build a tool for managing QSoft training process</li>\
                            <li>Manage User, Team, Topic with strict validation and relationship</li>\
                            <li>Clear analytic charts and useful lucky wheel for team-topic picking</li>\
                        </ul>\
                    </li>\
                    <li class="second-key-feature"><b>Framework:</b> \
                        <ul>\
                            <li><em><span class="highlight">Laravel</span></em> version 4.2.19 as Restful API;</li>\
                            <li><em><span class="highlight">Extjs</span></em> version 6.0.1.250 </li>\
                        </ul>\
                    </li>\
                    <li class="third-key-feature"><b>Use various Extjs Components</b>: \
                        <ul>\
                            <li>Tab, Grid Panel, Form, Chart, Window, etc. </li>\
                            <li>Style <em><span class="highlight">Dark</span></em> custom theme for the above components</li>\
                        </ul>\
                    </li>\
                    <li class="forth-key-feature"><b>Combine <em><span class="highlight">Extjs</span></em> and <em><span class="highlight">jQuery</span></em> to work together</b></li>\
                </ul>\
            </div>\
        </div>';

        $('.about-app-section .content').empty();
        $('.about-app-section').html('<header><h1><a href="#">QSoft Training App</a></h1></header>');
        $('.about-app-section').append(content);
        $('.about-app-section .content').on('click', function(){
            $('.about-app-section .key-features').css('background', 'none');
            if(clickCount == 0) {
                $('.about-app-section .first-key-feature').addClass('visible animated fadeInUp');
            } else if(clickCount == 1) {
                $('.about-app-section .second-key-feature').addClass('visible animated tada');
            } else if(clickCount == 2) {
                $('.about-app-section .third-key-feature').addClass('visible animated rubberBand');
            } else if(clickCount == 3) {
                $('.about-app-section .forth-key-feature').addClass('visible animated rollIn');
            }
            clickCount++;
        });
    },
    onAboutUsShow: function () {
        var clickCount = 0;
        var content = '<div class="content">\
            <div class="content-container">\
                <h2>Project members:</h2>\
                <ul class="key-features">\
                    <li class="first-key-feature">Vu Quang Son</li>\
                    <li class="second-key-feature">Nguyen Xuan Bach</li>\
                    <li class="third-key-feature">Cao Tung</li>\
                    <li class="forth-key-feature">Tran Quoc Hung</li>\
                    <li class="fifth-key-feature">Vu Manh Quyet</li>\
                    <li class="sixth-key-feature">Vu Xuan Thang</li>\
                </ul>\
            </div>\
        </div>';

        $('.about-us-section .content').empty();
        $('.about-us-section').html('<header><h1><a href="#">Team 5 - Theming team</a></h1></header>');
        $('.about-us-section').append(content);
        $('.about-us-section .content').on('click', function(){
            $('.about-us-section .key-features').css('background', 'none');
            if(clickCount == 0) {
                $('.about-us-section .first-key-feature').addClass('visible animated fadeInUp');
            } else if(clickCount == 1) {
                $('.about-us-section .second-key-feature').addClass('visible animated tada');
            } else if(clickCount == 2) {
                $('.about-us-section .third-key-feature').addClass('visible animated rubberBand');
            } else if(clickCount == 3) {
                $('.about-us-section .forth-key-feature').addClass('visible animated rollIn');
            } else if(clickCount == 4) {
                $('.about-us-section .fifth-key-feature').addClass('visible animated rotateIn');
            } else if(clickCount == 5) {
                $('.about-us-section .sixth-key-feature').addClass('visible animated slideInRight');
            }
            clickCount++;
        });
    }
});
